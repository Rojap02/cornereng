<script setup lang="ts">
import "@/assets/styles/home-page-style.css";
import bigBenImage from "@/images/Adobe Express - file.png";
import ReviewsSection from "@/components/Reviews.vue";
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
        <p><br />więcej dowiesz się w zakładce <RouterLink to="/o-mnie" class="about-link">O MNIE</RouterLink> i <RouterLink to="/oferta" class="about-link">OFERTA</RouterLink>.</p>
      </div>
    </div>
  </section>

  <section class="whats-to-find">
    <div class="whats-to-find-header">
      <h2>co tutaj znajdziesz?</h2>
    </div>

    <div class="whats-to-find-grid">
      <div class="whats-to-find-grid-card">
        <h3>indywidualne <br/>i grupowe zajęcia</h3>

        <p>lekcje dopasowane do Twojego poziomu i celu nauki, z indywidualnym podejściem.</p>
      </div>

      <div class="whats-to-find-grid-card">
        <h3>artykuły <br/>i wskazówki</h3>

        <p>praktyczne teksty o nauce angielskiego, psychologii uczenia się i skutecznych metodach zapamiętywania.</p>
      </div>

      <div class="whats-to-find-grid-card">
        <h3>darmowe materiały</h3>
        
        <p>notatki, PDF-y, fiszki <br/>i ćwiczenia, które pomagają Ci uczyć się samodzielnie <br/>i utrwalać wiedzę z zjęć.</p>
      </div>

      <div class="whats-to-find-grid-card">
        <h3>sklep</h3>

        <p>starannie przygotowane materiały edukacyjne dla uczniów, maturzystów <br/>i nauczycieli.</p>
      </div>
    </div>
  </section>

  <ReviewsSection />
</template>

