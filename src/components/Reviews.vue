<script setup lang="ts">
import "@/assets/styles/reviews-style.css";

import { ref } from "vue";

const reviewsContainer = ref<HTMLElement | null>(null);

const reviews = [
    {
        id: 1,
        author: "Janek",
        content: "Bardzo polecam zajęcia z Martyną!"
    },

    {
        id: 2,
        author: "Kasia",
        content: "Pierwszy raz naprawdę zaczęłam rozumieć gramatykę."
    },

    {
        id: 3,
        author: "Michał",
        content: "Super zajęcia! Gorąco polecam, wszystko tłumaczone bez pośpiechu i z wyczuciem."
    },

    {
        id: 4,
        author: "Szymon",
        content: "Kocham miśkę <3 !!!"
    }
];

const scrollReviews = (direction: "left" | "right") => {
    if (!reviewsContainer.value) return;

    const card = reviewsContainer.value.querySelector(
        ".review-card"
    ) as HTMLElement | null;

    if (!card) return;

    const gap = 40;
    const scrollAmount = card.offsetWidth + gap;

    reviewsContainer.value.scrollBy({
        left: direction === "right" ? scrollAmount : -scrollAmount,
        behavior: "smooth"
    });
};
</script>

<template>
    <section class="reviews">

        <div class="reviews-header">

            <div class="reviews-title">
                <h2>
                    opinie, <br />
                    które motywują mnie do działania
                </h2>
            </div>

            <div class="reviews-subtitle">
                <h3>
                    każda współpraca wygląda inaczej, ale cel jest ten sam:
                    <br />
                    rozwijać się w swoim tempie i czuć się pewnie w języku angielskim.
                </h3>
            </div>

        </div>

        <div class="reviews-slider">

            <button
                class="reviews-arrow reviews-arrow-left"
                aria-label="Poprzednia opinia"
                @click="scrollReviews('left')"
            >
                <span>←</span>
            </button>

            <div
                ref="reviewsContainer"
                class="reviews-container"
            >
                <div
                    v-for="review in reviews"
                    :key="review.id"
                    class="review-card"
                >
                    <p class="review-content">
                        {{ review.content }}
                    </p>

                    <p class="review-author">
                        {{ review.author }}
                    </p>
                </div>
            </div>

            <button
                class="reviews-arrow reviews-arrow-right"
                aria-label="Następna opinia"
                @click="scrollReviews('right')"
            >
                <span>→</span>
            </button>

        </div>

    </section>
</template>