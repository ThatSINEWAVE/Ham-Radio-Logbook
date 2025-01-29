document.addEventListener("DOMContentLoaded", function () {
    const freqForm = document.getElementById("freqForm");
    const freqTableBody = document.getElementById("freqTableBody");
    const downloadBackupButton = document.getElementById("downloadBackup");
    const uploadBackupButton = document.getElementById("uploadBackupButton");
    const uploadBackupInput = document.getElementById("uploadBackup");

    function loadFrequencies() {
        freqTableBody.innerHTML = "";
        const frequencies = JSON.parse(localStorage.getItem("frequencies")) || [];

        frequencies.forEach((freq, index) => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${freq.name}</td>
                <td>${freq.frequency}</td>
                <td>${freq.mode}</td>
                <td>${freq.tone}</td>
                <td>${freq.notes}</td>
                <td><button onclick="deleteFrequency(${index})">Delete</button></td>
            `;
            freqTableBody.appendChild(row);
        });
    }

    function saveFrequency(event) {
        event.preventDefault();
        const name = document.getElementById("name").value;
        const frequency = document.getElementById("frequency").value;
        const mode = document.getElementById("mode").value;
        const tone = document.getElementById("tone").value;
        const notes = document.getElementById("notes").value;
        const newFreq = { name, frequency, mode, tone, notes };
        const frequencies = JSON.parse(localStorage.getItem("frequencies")) || [];
        frequencies.push(newFreq);
        localStorage.setItem("frequencies", JSON.stringify(frequencies));
        freqForm.reset();
        loadFrequencies();
    }

    window.deleteFrequency = function (index) {
        const frequencies = JSON.parse(localStorage.getItem("frequencies")) || [];
        frequencies.splice(index, 1);
        localStorage.setItem("frequencies", JSON.stringify(frequencies));
        loadFrequencies();
    };

    function downloadBackup() {
        const frequencies = JSON.parse(localStorage.getItem("frequencies")) || [];
        let csvContent = "data:text/csv;charset=utf-8,Name,Frequency,Mode,Tone,Notes\n";
        csvContent += frequencies.map(freq =>
            `${freq.name},${freq.frequency},${freq.mode},${freq.tone},${freq.notes}`
        ).join("\n");
        const encodedUri = encodeURI(csvContent);
        const link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", "ham_radio_frequencies_backup.csv");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    function triggerFileUpload() {
        uploadBackupInput.click();
    }

    function uploadBackup(event) {
        const file = event.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = function (e) {
            const csvContent = e.target.result;
            const lines = csvContent.split("\n").slice(1); // Skip header
            const frequencies = lines.map(line => {
                const [name, frequency, mode, tone, notes] = line.split(",");
                return { name, frequency, mode, tone, notes };
            }).filter(freq => freq.name); // Filter out empty rows
            localStorage.setItem("frequencies", JSON.stringify(frequencies));
            loadFrequencies();
        };
        reader.readAsText(file);
    }

    freqForm.addEventListener("submit", saveFrequency);
    downloadBackupButton.addEventListener("click", downloadBackup);
    uploadBackupButton.addEventListener("click", triggerFileUpload);
    uploadBackupInput.addEventListener("change", uploadBackup);

    loadFrequencies();
});
