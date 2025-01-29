async function downloadFile(fileUrl, fileName, setLoading) {
  try {
    setLoading(true);
    const response = await fetch(fileUrl);
    const blob = await response.blob();
    const url = (window.URL || window.webkitURL).createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    (window.URL || window.webkitURL).revokeObjectURL(url);
  } catch (error) {
    console.error("Download failed", error);
  } finally {
    setLoading(false);
  }
}

export default downloadFile;
// Example usage:
// downloadFile('https://example.com/file.pdf', 'downloadedFile.pdf');
