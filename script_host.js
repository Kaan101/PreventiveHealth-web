(function() {
    // Sadece bu domainlerde çalışmasına izin ver
    const izinVerilenDomainler = ["salusai.com", "[www.salusai.com](https://www.salusai.com)", "localhost", "127.0.0.1"];
    const protokol = window.location.protocol;
    const domain = window.location.hostname;

    // 1. Eğer yerel dosya olarak açıldıysa (file: ile çift tıklandıysa)
    // 2. Veya izin verilen domain listenizde olmayan bir sunucuda açıldıysa
    if (protokol === "file:" || !izinVerilenDomainler.includes(domain)) {
        // Ekranı tamamen sıfırla ve uyarı mesajı koy
        document.documentElement.innerHTML = `
            <div style="font-family: 'Plus Jakarta Sans', sans-serif; display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100vh; background-color: #f8fafc; color: #1e293b; text-align: center; padding: 20px;">
                <div style="font-size: 50px; margin-bottom: 20px;">🔐</div>
                <h1 style="font-size: 24px; font-weight: 800; color: #e11d48; margin-bottom: 10px;">Güvenlik Engeli / Access Denied</h1>
                <p style="font-size: 14px; color: #64748b; max-width: 400px; margin-bottom: 20px;">
                    Bu uygulama güvenlik gereği yerel (local) olarak veya yetkisiz sunucularda çalıştırılamaz. Lütfen uygulamayı resmi sunucusu üzerinden kullanın.
                </p>
                <a href="[https://www.salusai.com](https://www.salusai.com)" style="display: inline-block; padding: 10px 20px; background-color: #059669; color: white; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 13px; transition: background 0.2s;">
                    Resmi Web Sitesine Git
                </a>
            </div>
        `;
        
        // Ek olarak asıl yönlendirmeyi yap
        setTimeout(function() {
            window.location.href = "[https://www.salusai.com](https://www.salusai.com)";
        }, 3000); // 3 saniye sonra yönlendir
    }
})();