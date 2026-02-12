export const formatFileSize = (bytes: number) => {
  if (bytes === 0) {
    return {
      value: 0,
      unit: "GB",
      fileSize: "0 GB",
    };
  }

  const k = 1024;
  const sizes = ["Bytes", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  const fileSize = parseFloat((bytes / Math.pow(k, i)).toFixed(2));

  return {
    value: fileSize,
    unit: sizes[i],
    fileSize: fileSize + " " + sizes[i],
  };
};
