import { useLoaderData } from "react-router-dom";
import { BsFillBookFill } from "react-icons/bs";
import { useState } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const ReadBook = () => {
  const book = useLoaderData().data;
  const [loader, setLoading] = useState(false);

  const downloadPDF = () => {
    const capture = document.querySelector(".pdfContent");
    setLoading(true);
    const pdfWidth = 210; // A4 page width in mm
    const pdfHeight = 297; // A4 page height in mm
    const aspectRatio = pdfWidth / pdfHeight;
    const contentWidth = capture.offsetWidth;
    const contentHeight = capture.offsetHeight;

    let imgWidth, imgHeight;

    if (contentWidth / contentHeight > aspectRatio) {
      imgWidth = pdfWidth;
      imgHeight = pdfWidth / (contentWidth / contentHeight);
    } else {
      imgWidth = pdfHeight * (contentWidth / contentHeight);
      imgHeight = pdfHeight;
    }

    html2canvas(capture).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const doc = new jsPDF("p", "mm", "a4");
      doc.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
      doc.save(`${book.book_name}.pdf`);
      setLoading(false);
    });
  };

  return (
    <>
      <div className="max-w-7xl mx-auto px-2 py-12 pdfContent">
        <h1 className="text-center md:text-left text-2xl font-bold flex flex-col md:flex-row items-center gap-2 dark:text-white">
          <BsFillBookFill className="text-primaryLight dark:text-primaryDark"></BsFillBookFill>
          {book.book_name}
        </h1>
        <hr className="my-2" />
        <p className="dark:text-gray-300">{book.book_description}</p>
      </div>
      <div className="mb-4 flex justify-center">
        <button
          onClick={downloadPDF}
          disabled={!(loader === false)}
          className="btn bg-primaryLight hover:bg-primaryLight dark:bg-primaryDark text-white"
        >
          {loader ? (
            <span className="loading loading-spinner loading-xs"></span>
          ) : (
            "Download"
          )}
        </button>
      </div>
    </>
  );
};

export default ReadBook;
