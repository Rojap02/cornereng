<script setup lang="ts">
import "@/assets/styles/home-page-style.css";
import bigBenImage from "@/images/big-ben.png";
</script>

<template>
  <section class="name">
    <div class="name-container">
        <p class="corner">corner</p>
        <p class="eng">.eng</p>
        <p class="subtitle">by martyna narożnik</p>
    </div>
  </section>

  <section class="whats-cornereng">
    <div class="whats-cornereng-image">
      <img :src="bigBenImage" alt="big ben" />
    </div>

    <div class="whats-cornereng-text">
      <div class="whats-cornereng-text-header">
        <h2>czym jest corner.eng?</h2>
      </div>

      <div class="whats-cornereng-text-body">
        <p>corner.eng powstało z przekonania, że nauka języka nie musi być stresująca ani oparta na bezmyślnym zapamiętywaniu.</p>
        <p><br />więcej dowiesz się w zakładce <RouterLink to="/o-mnie" class="about-link">O MNIE</RouterLink>.</p>
      </div>
    </div>
  </section>

  <section class="whats-to-find">
    <div class="whats-to-find-header">
      <h2>co tutaj znajdziesz?</h2>
    </div>

    <div class="whats-to-find-grid">
      <div class="whats-to-find-grid-card">
        <h3>indywidualne i grupowe zajęcia</h3>

        <p>Lekcje dopasowane do Twojego poziomu i celu nauki, z indywidualnym podejściem.</p>
      </div>

      <div class="whats-to-find-grid-card">
        <h3>artykuły i wskazówki</h3>

        <p>Praktyczne teksty o nauce angielskiego, psychologii uczenia się i skutecznych metodach zapamiętywania.</p>
      </div>

      <div class="whats-to-find-grid-card">
        <h3>darmowe materiały</h3>
        
        <p>Notatki, PDF-y, fiszki i ćwiczenia, które pomagają Ci uczyć się samodzielnie i utrwalać wiedzę z zjęć.</p>
      </div>

      <div class="whats-to-find-grid-card">
        <h3>sklep</h3>

        <p>Starannie przygotowane materiały edukacyjne dla uczniów, maturzystów i nauczycieli.</p>
      </div>
    </div>
  </section>

    
  
</template>

