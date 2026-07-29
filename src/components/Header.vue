<script setup lang="ts">
import "@/assets/styles/header-style.css";
</script>

<template>
  <header class="header">
    <RouterLink class="logo" to="/">corner.eng</RouterLink>
    <a
      class="instagram-link"
      href="https://www.instagram.com/corner.eng/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Profil Instagram corner.eng"
    >
      <i class="fa-brands fa-instagram"></i>
    </a>

    <nav class="navigation">
      <ul class="navigation-list">
        <li>
          <RouterLink class="navigation-link" to="/o-mnie">o mnie</RouterLink>
        </li>
        <li>
          <RouterLink class="navigation-link" to="/artykuly"
            >artykuły</RouterLink
          >
        </li>
        <li>
          <RouterLink class="navigation-link" to="/darmowe-materialy"
            >darmowe materiały</RouterLink
          >
        </li>
        <li>
          <RouterLink class="navigation-link" to="/sklep">sklep</RouterLink>
        </li>
        <li>
          <RouterLink class="navigation-link" to="/matura-2027"
            >matura 2027</RouterLink
          >
        </li>
        <li>
          <RouterLink class="navigation-link" to="/zapisz-sie"
            >zapisz się na zajęcia</RouterLink
          >
        </li>
      </ul>
    </nav>
  </header>
</template>
