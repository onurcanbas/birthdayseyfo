document.addEventListener('DOMContentLoaded', function() {
    const iframe = document.getElementById('birthdayVideo');
    
    // Google Drive video linki
    const videoId = '1zVlo5JQqzEuB-TUf5D2cuawCAYDqlOT5';
    iframe.src = `https://drive.google.com/file/d/${videoId}/preview`;
}); 