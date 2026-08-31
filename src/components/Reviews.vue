<script setup lang="ts">
import "@/assets/styles/reviews-style.css";

import { ref, onMounted } from "vue";
import { getReviews } from "@/services/reviewsService";

interface Review {
    id: number;
    author: string;
    content: string;
}

const reviews = ref<Review[]>([]);

const reviewsContainer = ref<HTMLElement | null>(null);

onMounted(async () => {
    try {
        reviews.value = await getReviews();
    } catch (error) {
        console.error("Błąd podczas pobierania opinii:", error);
    }
});

const scrollReviews = (direction: "left" | "right") => {
    if(!reviewsContainer.value) return;

    const card = reviewsContainer.value.querySelector(
        ".review-card"
    ) as HTMLElement | null;

    if(!card) return;

    const gap = 40;
    const scrollAmount = card.offsetWidth + gap;

    reviewsContainer.value.scrollBy({
        left: direction === "right" ? scrollAmount : -scrollAmount,
        behavior: "smooth",
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
                    <div class="review-content-scroll">
                        <p class="review-content">
                            "{{ review.content }}"
                        </p>
                    </div>

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