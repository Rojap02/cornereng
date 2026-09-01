<script setup lang="ts">
  import "@/assets/styles/sign-up-page-style.css";
</script>

<template>
  <section class="sign-up">
    <div class="sign-up-header">
      <h2>rozpocznij współpracę</h2>
    </div>

    <div class="sign-up-text">
      <p>wypłnij formularz zgłoszeniowy, a ja odezwę się z propozycją bezpłątnej konsultacji lub rozpoczęcia współpracy!
      <br>przed zapisem sprawdź moją <RouterLink class="sign-up-link" to="/oferta">ofertę</RouterLink>, <RouterLink class="sign-up-link" to="/regulamin">regulamin</RouterLink> oraz <RouterLink class="sign-up-link" to="/polityka-prywatnosci">politykę prywatności</RouterLink>.
    </p>
    </div>

    <div class="sign-up-button">
      <a href="https://docs.google.com/forms/d/e/1FAIpQLScd5s0jLeI3wtgeIPHis6SmEp9jcewBHnponTCLkRA0vw3hJA/closedform?pli=1" 
      class="btn"
      target="_blank" 
      rel="noopener noreferrer"
      aria-label="Formularz zapisów na zajęcia językowe w corner.eng"
      >WYPEŁNIJ FORMULARZ ZGŁOSZENIOWY</a>
    </div>
  </section>
</template>
