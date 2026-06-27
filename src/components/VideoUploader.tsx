import React, { useState, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Film, Copy, Check, Play, Trash2, ExternalLink, ArrowLeft, Plus, Link2 } from 'lucide-react';
import { PROJECTS } from '../data/cms';
import { StickyNavigation } from './StickyNavigation';

/**
 * VideoUploader — Pure Frontend CMS Video Manager
 * 
 * No backend dependencies. This tool:
 * 1. Previews local video files via Object URLs (browser-only, not persisted)
 * 2. Shows all video references currently used in /data/cms.ts
 * 3. Lets you manage external video URLs (Cloudinary, YouTube, etc.)
 * 4. Provides copy-to-clipboard for pasting URLs into cms.ts
 */

interface ManagedVideo {
  id: string;
  name: string;
  url: string;
  source: 'local-preview' | 'external';
  size?: number;
  localObjectUrl?: string;
}

// Extract all video URLs currently referenced in CMS data
const CMS_VIDEO_REFERENCES = PROJECTS
  .filter(p => p.type === 'video' || p.blocks?.some(b => b.type === 'video'))
  .map(p => ({
    projectTitle: p.title,
    slug: p.slug,
    coverUrl: p.src,
    coverType: p.type,
    blockVideos: (p.blocks || [])
      .filter(b => b.type === 'video' && b.mediaSrc)
      .map(b => ({ headline: b.headline || 'Untitled Block', url: b.mediaSrc! })),
  }));

export const VideoUploader = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [videos, setVideos] = useState<ManagedVideo[]>([]);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [externalUrl, setExternalUrl] = useState('');
  const [externalName, setExternalName] = useState('');
  const [activeTab, setActiveTab] = useState<'manager' | 'cms-audit'>('manager');
  const [previewingId, setPreviewingId] = useState<string | null>(null);

  const handleLocalFile = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    Array.from(files).forEach(file => {
      const objectUrl = URL.createObjectURL(file);
      const newVideo: ManagedVideo = {
        id: `local-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
        name: file.name,
        url: objectUrl,
        source: 'local-preview',
        size: file.size,
        localObjectUrl: objectUrl,
      };
      setVideos(prev => [newVideo, ...prev]);
    });

    // Reset input
    if (fileInputRef.current) fileInputRef.current.value = '';
  }, []);

  const handleAddExternal = useCallback(() => {
    if (!externalUrl.trim()) return;
    const newVideo: ManagedVideo = {
      id: `ext-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      name: externalName.trim() || new URL(externalUrl).pathname.split('/').pop() || 'External Video',
      url: externalUrl.trim(),
      source: 'external',
    };
    setVideos(prev => [newVideo, ...prev]);
    setExternalUrl('');
    setExternalName('');
  }, [externalUrl, externalName]);

  const handleRemove = useCallback((id: string) => {
    setVideos(prev => {
      const video = prev.find(v => v.id === id);
      if (video?.localObjectUrl) URL.revokeObjectURL(video.localObjectUrl);
      return prev.filter(v => v.id !== id);
    });
    if (previewingId === id) setPreviewingId(null);
  }, [previewingId]);

  const copyToClipboard = useCallback(async (text: string, id: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    } catch {
      // Fallback
      const textarea = document.createElement('textarea');
      textarea.value = text;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    }
  }, []);

  const formatSize = (bytes: number) => {
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / 1024 / 1024).toFixed(2)} MB`;
  };

  const previewVideo = videos.find(v => v.id === previewingId);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      <StickyNavigation variant="light" showLogo={true} />

      <div className="max-w-5xl mx-auto px-6 pt-32 pb-20">
        {/* Header */}
        <div className="flex items-center gap-4 mb-2">
          <button
            onClick={() => navigate(-1)}
            className="p-2 rounded-full border border-white/10 hover:border-white/30 hover:bg-white/5 transition-all cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 text-white/60" />
          </button>
          <div className="flex items-center gap-3">
            <Film className="w-6 h-6 text-white/40" />
            <h1 className="font-['Inter',sans-serif] tracking-[4px] uppercase text-[24px] text-white/90">
              Video Manager
            </h1>
          </div>
        </div>
        <p className="text-white/40 text-[13px] tracking-wide font-['Inter',sans-serif] ml-[52px] mb-10">
          Pure frontend — no backend dependencies. Preview local files, manage external URLs, audit CMS references.
        </p>

        {/* Tabs */}
        <div className="flex gap-0 mb-8 border-b border-white/10">
          <button
            onClick={() => setActiveTab('manager')}
            className={`px-6 py-3 text-[12px] tracking-[2px] uppercase font-['Arial',sans-serif] transition-colors cursor-pointer ${
              activeTab === 'manager'
                ? 'text-white border-b-2 border-white'
                : 'text-white/40 hover:text-white/70'
            }`}
          >
            Video Manager
          </button>
          <button
            onClick={() => setActiveTab('cms-audit')}
            className={`px-6 py-3 text-[12px] tracking-[2px] uppercase font-['Arial',sans-serif] transition-colors cursor-pointer ${
              activeTab === 'cms-audit'
                ? 'text-white border-b-2 border-white'
                : 'text-white/40 hover:text-white/70'
            }`}
          >
            CMS Audit ({CMS_VIDEO_REFERENCES.length} Projects)
          </button>
        </div>

        {activeTab === 'manager' && (
          <>
            {/* Add Video Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
              {/* Local File */}
              <div className="bg-[#111] border border-white/10 rounded-lg p-6 hover:border-white/20 transition-colors">
                <h3 className="text-[12px] tracking-[2px] uppercase text-white/50 font-['Arial',sans-serif] mb-4">
                  Local Preview
                </h3>
                <p className="text-[13px] text-white/30 mb-4 leading-relaxed">
                  Select a local video to preview in-browser. Generates a temporary Object URL — not persisted.
                </p>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="video/mp4,video/webm,video/quicktime"
                  onChange={handleLocalFile}
                  className="hidden"
                  multiple
                />
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="flex items-center gap-2 px-4 py-2.5 bg-white/5 border border-white/20 rounded-full hover:bg-white/10 hover:border-white/30 transition-all text-[12px] tracking-[1.5px] uppercase cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5" />
                  Select File
                </button>
              </div>

              {/* External URL */}
              <div className="bg-[#111] border border-white/10 rounded-lg p-6 hover:border-white/20 transition-colors">
                <h3 className="text-[12px] tracking-[2px] uppercase text-white/50 font-['Arial',sans-serif] mb-4">
                  External URL
                </h3>
                <div className="space-y-3">
                  <input
                    type="text"
                    placeholder="Label (e.g. Kona Estate Hero)"
                    value={externalName}
                    onChange={e => setExternalName(e.target.value)}
                    className="w-full bg-[#0A0A0A] border border-white/10 rounded px-3 py-2 text-[13px] text-white placeholder:text-white/20 focus:outline-none focus:border-white/30"
                  />
                  <div className="flex gap-2">
                    <input
                      type="url"
                      placeholder="https://res.cloudinary.com/..."
                      value={externalUrl}
                      onChange={e => setExternalUrl(e.target.value)}
                      onKeyDown={e => e.key === 'Enter' && handleAddExternal()}
                      className="flex-1 bg-[#0A0A0A] border border-white/10 rounded px-3 py-2 text-[13px] text-white placeholder:text-white/20 focus:outline-none focus:border-white/30"
                    />
                    <button
                      onClick={handleAddExternal}
                      disabled={!externalUrl.trim()}
                      className="px-4 py-2 bg-white/5 border border-white/20 rounded-full hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed transition-all text-[12px] tracking-[1.5px] uppercase cursor-pointer"
                    >
                      <Link2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Video Preview Modal */}
            {previewVideo && (
              <div className="mb-8 bg-[#111] border border-white/10 rounded-lg overflow-hidden">
                <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
                  <span className="text-[12px] tracking-[2px] uppercase text-white/50 font-['Arial',sans-serif]">
                    Preview — {previewVideo.name}
                  </span>
                  <button
                    onClick={() => setPreviewingId(null)}
                    className="text-white/40 hover:text-white text-[12px] cursor-pointer"
                  >
                    Close
                  </button>
                </div>
                <div className="aspect-video bg-black">
                  {previewVideo.url.includes('youtu') ? (
                    <iframe
                      src={`https://www.youtube.com/embed/${
                        previewVideo.url.includes('youtu.be')
                          ? previewVideo.url.split('/').pop()?.split('?')[0]
                          : new URLSearchParams(new URL(previewVideo.url).search).get('v')
                      }?autoplay=0`}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      style={{ border: 0 }}
                    />
                  ) : (
                    <video
                      src={previewVideo.url}
                      controls
                      className="w-full h-full object-contain"
                    />
                  )}
                </div>
              </div>
            )}

            {/* Video List */}
            {videos.length === 0 ? (
              <div className="text-center py-20 border border-dashed border-white/10 rounded-lg">
                <Film className="w-8 h-8 text-white/15 mx-auto mb-4" />
                <p className="text-white/30 text-[13px]">No videos added yet</p>
                <p className="text-white/15 text-[12px] mt-1">Select a local file or add an external URL above</p>
              </div>
            ) : (
              <div className="space-y-3">
                {videos.map(video => (
                  <div
                    key={video.id}
                    className="group bg-[#111] border border-white/10 rounded-lg p-4 hover:border-white/20 transition-colors"
                  >
                    <div className="flex items-start gap-4">
                      {/* Thumbnail / Play */}
                      <button
                        onClick={() => setPreviewingId(previewingId === video.id ? null : video.id)}
                        className="w-16 h-16 shrink-0 bg-black/50 rounded border border-white/10 flex items-center justify-center hover:border-white/30 transition-colors cursor-pointer"
                      >
                        <Play className="w-5 h-5 text-white/50" />
                      </button>

                      {/* Info */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <p className="text-[14px] text-white/80 truncate">{video.name}</p>
                          <span className={`text-[10px] tracking-[1px] uppercase px-2 py-0.5 rounded-full border ${
                            video.source === 'local-preview'
                              ? 'text-amber-400/70 border-amber-400/20 bg-amber-400/5'
                              : 'text-emerald-400/70 border-emerald-400/20 bg-emerald-400/5'
                          }`}>
                            {video.source === 'local-preview' ? 'Local' : 'External'}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <p className="text-[11px] text-white/25 font-mono truncate flex-1">
                            {video.source === 'local-preview' ? 'blob:// (temporary — not persisted)' : video.url}
                          </p>
                          {video.size && (
                            <span className="text-[11px] text-white/20 shrink-0">{formatSize(video.size)}</span>
                          )}
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex items-center gap-1 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
                        {video.source === 'external' && (
                          <button
                            onClick={() => copyToClipboard(video.url, video.id)}
                            className="p-2 rounded hover:bg-white/5 transition-colors cursor-pointer"
                            title="Copy URL"
                          >
                            {copiedId === video.id ? (
                              <Check className="w-4 h-4 text-emerald-400" />
                            ) : (
                              <Copy className="w-4 h-4 text-white/40" />
                            )}
                          </button>
                        )}
                        {video.source === 'external' && (
                          <a
                            href={video.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded hover:bg-white/5 transition-colors"
                            title="Open in new tab"
                          >
                            <ExternalLink className="w-4 h-4 text-white/40" />
                          </a>
                        )}
                        <button
                          onClick={() => handleRemove(video.id)}
                          className="p-2 rounded hover:bg-red-500/10 transition-colors cursor-pointer"
                          title="Remove"
                        >
                          <Trash2 className="w-4 h-4 text-white/30 hover:text-red-400" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </>
        )}

        {activeTab === 'cms-audit' && (
          <div className="space-y-6">
            <p className="text-white/30 text-[13px] leading-relaxed mb-6">
              All video references found in <code className="bg-white/5 px-1.5 py-0.5 rounded text-[12px] text-white/50">/data/cms.ts</code>. 
              Click any URL to copy it. Placeholder URLs are flagged.
            </p>

            {CMS_VIDEO_REFERENCES.map(project => (
              <div key={project.slug} className="bg-[#111] border border-white/10 rounded-lg overflow-hidden">
                {/* Project Header */}
                <div className="flex items-center justify-between px-5 py-4 border-b border-white/5">
                  <div>
                    <h3 className="text-[14px] text-white/80">{project.projectTitle}</h3>
                    <p className="text-[11px] text-white/25 font-mono mt-0.5">/{project.slug}</p>
                  </div>
                  <button
                    onClick={() => navigate(`/studio/${project.slug}`)}
                    className="text-[11px] tracking-[1.5px] uppercase text-white/30 hover:text-white/60 transition-colors cursor-pointer"
                  >
                    View
                  </button>
                </div>

                {/* Cover Video */}
                {project.coverType === 'video' && (
                  <div className="px-5 py-3 border-b border-white/5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] tracking-[1px] uppercase text-white/30">Cover</span>
                        {(project.coverUrl.includes('cloudinary.com/demo') || project.coverUrl.includes('samples/')) && (
                          <span className="text-[9px] tracking-[1px] uppercase px-1.5 py-0.5 rounded bg-amber-400/10 text-amber-400/60 border border-amber-400/20">
                            Placeholder
                          </span>
                        )}
                      </div>
                      <button
                        onClick={() => copyToClipboard(project.coverUrl, `cover-${project.slug}`)}
                        className="flex items-center gap-1.5 text-[11px] text-white/30 hover:text-white/60 transition-colors cursor-pointer"
                      >
                        {copiedId === `cover-${project.slug}` ? (
                          <><Check className="w-3 h-3 text-emerald-400" /> Copied</>
                        ) : (
                          <><Copy className="w-3 h-3" /> Copy</>
                        )}
                      </button>
                    </div>
                    <p className="text-[11px] text-white/20 font-mono mt-1 truncate">{project.coverUrl}</p>
                  </div>
                )}

                {/* Block Videos */}
                {project.blockVideos.length > 0 && (
                  <div className="px-5 py-3">
                    <span className="text-[10px] tracking-[1px] uppercase text-white/30 mb-2 block">
                      Block Videos ({project.blockVideos.length})
                    </span>
                    <div className="space-y-2">
                      {project.blockVideos.map((bv, i) => {
                        const isPlaceholder = bv.url.includes('cloudinary.com/demo') || bv.url.includes('samples/');
                        const copyId = `block-${project.slug}-${i}`;
                        return (
                          <div key={i} className="flex items-center justify-between gap-3 py-1">
                            <div className="flex items-center gap-2 min-w-0 flex-1">
                              <span className="text-[11px] text-white/40 shrink-0">{bv.headline}</span>
                              {isPlaceholder && (
                                <span className="text-[9px] tracking-[1px] uppercase px-1.5 py-0.5 rounded bg-amber-400/10 text-amber-400/60 border border-amber-400/20 shrink-0">
                                  Placeholder
                                </span>
                              )}
                              <p className="text-[10px] text-white/15 font-mono truncate">{bv.url}</p>
                            </div>
                            <button
                              onClick={() => copyToClipboard(bv.url, copyId)}
                              className="shrink-0 p-1 rounded hover:bg-white/5 transition-colors cursor-pointer"
                            >
                              {copiedId === copyId ? (
                                <Check className="w-3 h-3 text-emerald-400" />
                              ) : (
                                <Copy className="w-3 h-3 text-white/25" />
                              )}
                            </button>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Footer Instructions */}
        <div className="mt-12 bg-[#0D0D14] border border-white/5 rounded-lg p-6">
          <h3 className="text-[12px] tracking-[2px] uppercase text-white/40 font-['Arial',sans-serif] mb-4">
            Workflow
          </h3>
          <ol className="space-y-2 text-[13px] text-white/30 leading-relaxed list-decimal list-inside">
            <li>Upload your video to an external host (Cloudinary, Vimeo, YouTube, etc.)</li>
            <li>Add the URL here using the <span className="text-white/50">External URL</span> input, or paste it directly into <code className="bg-white/5 px-1.5 py-0.5 rounded text-[12px] text-white/50">/data/cms.ts</code></li>
            <li>Use the <span className="text-white/50">CMS Audit</span> tab to identify placeholder videos that need replacing</li>
            <li>Copy the URL and update the corresponding constant in cms.ts (e.g. <code className="bg-white/5 px-1.5 py-0.5 rounded text-[11px] text-white/50">VID_KONA</code>, <code className="bg-white/5 px-1.5 py-0.5 rounded text-[11px] text-white/50">VID_VESPER</code>)</li>
          </ol>
        </div>
      </div>
    </div>
  );
};
