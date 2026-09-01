<script setup lang="ts">
import "@/assets/styles/offer-page-style.css";
</script>

<template>
  <section class="offer">
    <div class="offer-header">
      <h2>jak wyglądają zajęcia w praktyce?</h2>
    </div>

    <div class="offer-list">
      <div class="offer-list-item">
        <h3>psychologiczne podejście do bariery językowej</h3>

        <p>jako studentka IV roku psychologii doskonale rozumiem, skąd bierze się stres przed mówieniem i lęk przed błędami.</p>
        <p>tworzę bezpieczną przestrzeń, w której powoli zdejmujemy blokady i budujemy Twoją pewność siebie.</p>
      </div>

      <div class="offer-list-item">
        <h3>autorskie materiały</h3>
        
        <p>pracujemy na moich autorskich notatkach, prezentacjach, czytankach, słuchankach i zestawach zadań.</p>
        <p>wszystko dostajesz ode mnie.</p>
      </div>

      <div class="offer-list-item">
        <h3>zadania domowe z kluczem odpowiedzi</h3>

        <p>prace domowe zawsze otrzymujesz z jasnym kluczem i wskazówkami, dzięki czemu możesz wygodnie i samodzielnie<br>sprawdzać swoje postępy.</p>
      </div>

      <div class="offer-list-item">
        <h3>wsparcie między zajęciami</h3>

        <p>masz pytanie do zadania domowego albo utkniesz przy powtórce?</p>
        <p>piszesz do mnie na wybranym komunikatorze - nie zostajesz z problemem sama/sam do kolejnej lekcji.</p>      
      </div>

      <div class="offer-list-item">
        <h3>skrupulatne sprawdzanie prac pisemnych</h3>

        <p>każde Twoje wypracowanie rozkładam na czynniki pierwsze.</p>
        <p>dostajesz szczegółowy feedback, wyłapane błędy i konkretne wskazówki, jak pisać lepiej.</p>      
      </div>

      <div class="offer-list-item">
        <h3>rozmowy na Twoich warunkach</h3>

        <p>ćwiczymy swobodne mówienie! szlifujemy wypowiedzi pod kątem matury ustnej,</p>
        <p>ale rozmawiamy też na absolutnie dowolne, interesujące Cię tematy - od Twoich pasji po codzienne sprawy.</p>      
      </div>
    </div>
  </section>

  <section class="individual">
    <div class="individual-header">
      <h2>cennik zajęć indywidualnych</h2>
    </div>

    <div class="individual-body">
      <div class="individual-item">
        <p>pełna personalizacja, praca w Twoim tempie i 100% uwagi skupionej na Tobie.<br></p>

        <p class="asterix">
        *zajęcia rozliczane są w stałych miesięcznych pakietach z góry.<br><br>
        </p>
        
        <p class="individual-price">zajęcia ogólne / konwersacje / nadrabianie zaległości:<br>
        100 zł / 60 min<br><br>
        przygotowanie do matury (podstawowej / rozszerzonej / ustnej):<br>
        120 zł / 60 min<br>
        </p>
        
        <p class="asterix">
        *wyższa cena wynika z pracy ściśle z informatorem CKE oraz nielimitowanego, bardzo szcegółowego sprawdzania<br>
        wszystkich wyracowań maturalnych przesłanych poza czasem zajęć.
        </p>
      </div>
    </div>
  </section>

  <section class="group">
    <div class="individual-header">
      <h2>cennik zajęć grupowych</h2>
    </div>

    <div class="group-body">
      <p>nauka w małych grupach, dynamiczna interakcja, wzajemna motywacja i niższa cena za osobę.<br></p>
      
      <p class="asterix">
      *zajęcia rozliczane są w stałych miesięcznych pakietach z góry.<br>
      **chcesz stworzyć własną grupę ze znajomymi z klasy lub pracy? daj zmnać - ustalimy wspólny grafik!<br><br>
      </p>
      
      <div class="price-table-wrapper">
        <table class="price-table">
          <thead>
            <tr>
              <th>rodzaj zajęć:</th>
              <th>grupa 2 osoby</th>
              <th>grupa 3 osoby</th>
              <th>grupa 4 osoby</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>zajęcia ogólne / <br>konwersacyjne</td>
              <td>80 zł / os.<br><span>(60 min)</span></td>
              <td>70 zł / os.<br><span>(75 min)</span></td>
              <td>60 zł / os.<br><span>(90 min)</span></td>
            </tr>

            <tr>
              <td>grupa maturalna<br>(CKE)</td>
              <td>90 zł / os.<br><span>(60 min)</span></td>
              <td>80 zł / os.<br><span>(75 min)</span></td>
              <td>70 zł / os.<br><span>(90 min)</span></td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  </section>
</template>
