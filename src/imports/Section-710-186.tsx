function ImageGalleryImage() {
  return <div className="h-[1070.438px] shrink-0 w-full" data-name="Image (Gallery Image 1)" />;
}

function Container() {
  return (
    <div className="absolute bg-[#0a0a0a] content-stretch flex flex-col h-[1070.438px] items-start left-0 overflow-clip top-[128px] w-[1903px]" data-name="Container">
      <ImageGalleryImage />
    </div>
  );
}

function ImageGalleryImage1() {
  return <div className="h-[950px] shrink-0 w-full" data-name="Image (Gallery Image 2)" />;
}

function Container1() {
  return (
    <div className="basis-0 bg-[#0a0a0a] grow h-[950px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <ImageGalleryImage1 />
      </div>
    </div>
  );
}

function ImageGalleryImage2() {
  return <div className="h-[950px] shrink-0 w-full" data-name="Image (Gallery Image 3)" />;
}

function Container2() {
  return (
    <div className="basis-0 bg-[#0a0a0a] grow h-[950px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <ImageGalleryImage2 />
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute content-stretch flex gap-[3px] h-[950px] items-start left-0 top-[1201.44px] w-[1903px]" data-name="Container">
      <Container1 />
      <Container2 />
    </div>
  );
}

function ImageGalleryImage3() {
  return <div className="h-[1016.906px] shrink-0 w-full" data-name="Image (Gallery Image 4)" />;
}

function Container4() {
  return (
    <div className="absolute bg-[#0a0a0a] content-stretch flex flex-col h-[1016.906px] items-start left-[47.58px] overflow-clip top-[2154.44px] w-[1807.844px]" data-name="Container">
      <ImageGalleryImage3 />
    </div>
  );
}

function ImageGalleryImage4() {
  return <div className="h-[963.375px] shrink-0 w-full" data-name="Image (Gallery Image 5)" />;
}

function Container5() {
  return (
    <div className="absolute bg-[#0a0a0a] content-stretch flex flex-col h-[963.375px] items-start left-0 overflow-clip top-[3174.34px] w-[1712.688px]" data-name="Container">
      <ImageGalleryImage4 />
    </div>
  );
}

export default function Section() {
  return (
    <div className="bg-[#121212] relative size-full" data-name="Section">
      <Container />
      <Container3 />
      <Container4 />
      <Container5 />
    </div>
  );
}