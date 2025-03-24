document.addEventListener('DOMContentLoaded', function() {
    const iframe = document.getElementById('birthdayVideo');
    
    // Google Drive video linki
    const videoId = '10ANnKCj77DJD1bb7vZmWmog_Jx2Wwers';
    iframe.src = `https://drive.google.com/file/d/${videoId}/preview`;
}); 
