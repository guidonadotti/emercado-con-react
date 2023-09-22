import { Dropzone, FileMosaic } from "@dropzone-ui/react";
import { useState } from "react";

export default function DropzoneImg() {
  const [files, setFiles] = useState([]);
  const updateFiles = (incommingFiles) => {
    setFiles(incommingFiles);
  };

  return (
    <Dropzone
      localization="ES-es"
      accept="image/*"
      onChange={updateFiles}
      value={files}
      label="Arrastre sus imágenes aquí"
    >
      {files.map((file) => (
        <FileMosaic {...file} preview />
      ))}
    </Dropzone>
  );
}
