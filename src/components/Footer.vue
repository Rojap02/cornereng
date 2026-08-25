<script setup lang="ts">
import "@/assets/styles/footer-style.css"
</script>

<template>
    <div class="footer">
        <div class="footer-header">
            <h2>sugestie?<br/>pytania?</h2>
        </div>

        <div class="footer-container">
            <div class="mail">
                <a href="mailto:martyna.naroznik.korepetycje@gmail.com" onclick="navigator.clipboard.writeText('martyna.naroznik.korepetycje@gmail.com'); alert('Skopiowano adres email!'); return false;">
                    <i class="fa-regular fa-envelope"></i>martyna.naroznik.korepetycje@gmail.com</a>
            </div>

            <div class="instagram">
                <a
                    class="instagram-link"
                    href="https://www.instagram.com/corner.eng/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Profil Instagram corner.eng"
                >     
                <i class="fa-brands fa-instagram"></i>corner.eng
                </a>
            </div>

            <div class="statute">
                <a href="/regulamin" 
                class="footer-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Regulamin zajęć"
                >
                    <i class="fa-solid fa-file-contract"></i>regulamin zajęć
                </a>
            </div>

            <div class="privacy">
                <RouterLink to="/polityka-prywatnosci" class="footer-link" aria-label="Polityka prywatności">
                    <i class="fa-solid fa-user-shield"></i>polityka prywatności
                </RouterLink>
            </div>
        </div>
    </div>
</template>