var simplemde = new SimpleMDE({
    element: document.getElementById("editor"),
    forceSync: true,
    spellChecker: false
});

function handleDownload() {
    var content = simplemde.value();;
    var blob = new Blob([ content ], { "type" : "text/plain" });
    var filename = document.getElementById("filename").value + ".md";

    document.getElementById("download").setAttribute("download", filename);

    if (window.navigator.msSaveBlob) { 
        window.navigator.msSaveBlob(blob, filename); 

        // msSaveOrOpenBlobの場合はファイルを保存せずに開ける
        window.navigator.msSaveOrOpenBlob(blob, filename); 
    } else {
        document.getElementById("download").href = window.URL.createObjectURL(blob);
    }
}