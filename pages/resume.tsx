import dynamic from "next/dynamic";

//@ts-ignore
const FileViewer = dynamic(() => import("react-file-viewer"), {
  ssr: false,
});

export default function Index() {
  return (
    <div
      style={{
        backgroundColor: "white",
        // display: "flex",
        // justifyContent: "center",
        // alignItems: "center",
      }}
    >
      <FileViewer fileType="pdf" filePath="/resume_gjchoo.pdf" />
    </div>
  );
}
