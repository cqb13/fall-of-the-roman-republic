<script setup lang="ts">
import { ref } from "vue";
import { Event } from "./data/events";
import events from "./data/events";

type YearGroup = {
  year: string;
  color: string;
  events: Event[];
};

const colors: string[] = ["#ca5454", "#e8a040", "#fcdd75", "#ebc59c"];

const switchColor = (currentColor: number) => {
  if (currentColor == colors.length - 1) {
    return 0;
  } else {
    return currentColor + 1;
  }
};

const groupedEvents: YearGroup[] = [];
let eventIndex = 0;

const groupEvents = () => {
  let currentYear = "";
  let currentYearGroup: YearGroup = { year: "", color: "", events: [] };
  let currentColor = 3; // to start at first color

  events.forEach((timelineEvent) => {
    const year = timelineEvent.date.replace(" BCE", "").replace(" CE", "");

    if (year != currentYear) {
      currentYear = year;
      currentColor = switchColor(currentColor);
      let colorStr = colors[currentColor];
      currentYearGroup = { year: year, color: colorStr, events: [] };
      groupedEvents.push(currentYearGroup);
    }

    let timelineEventWithIndex = timelineEvent;
    timelineEventWithIndex.index = eventIndex;

    currentYearGroup.events.push(timelineEventWithIndex);
    eventIndex++;
  });
};

groupEvents();

const imageModalVisible = ref(false);
const imageModalImage = ref("");

const openImageModal = (image: string) => {
  imageModalImage.value = image;
  imageModalVisible.value = true;
  document.body.style.overflow = "hidden";
};

const closeImageModal = () => {
  imageModalVisible.value = false;
  document.body.style.overflow = "visible";
};

const isMobile = () => {
  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    return true;
  } else {
    return window.innerWidth < 768;
  }
};
</script>

<template>
  <header class="bg-primary-800 p-10 py-24">
    <section>
      <h1 className="text-center text-6xl font-heading text-background-50">
        The Fall of the Roman Republic
      </h1>
    </section>
  </header>
  <main
    class="relative top-14 w-8/12 m-auto mb-32 p-4 flex flex-col items-center max-xl:w-10/12 max-md:w-full"
  >
    <div
      class="absolute left-1/2 w-4 rounded-lg -z-10 bg-slate-400 h-full transform -translate-x-1/2 max-md:left-[10%]"
    ></div>

    <section
      v-for="group in groupedEvents"
      class="w-full flex flex-col items-center max-md:items-start max-md:ml-[1rem]"
    >
      <div
        class="w-96 h-8 rounded-2xl bg-primary my-5 flex items-center justify-center max-sm:w-80"
      >
        <p class="font-medium text-lg">{{ group.year }}</p>
      </div>
      <section
        v-for="event in group.events"
        class="w-full flex items-start justify-between p-4"
      >
        <section
          v-if="event.index != undefined && event.index % 2 == 0 && !isMobile()"
          class="w-full flex items-start justify-between p-4"
        >
          <div class="w-[48%]">
            <div
              class="bg-background-50 w-11/12 py-2 px-4 rounded-xl drop-shadow-xl"
            >
              <h2 class="text-xl font-semibold">{{ event.name }}</h2>
              <p class="text-lg">{{ event.description }}</p>
              <img
                v-if="event.image"
                @click="`${event.image ? openImageModal(event.image) : ''}`"
                :src="`${
                  event.image.startsWith('http')
                    ? `${event.image}`
                    : `${event.image}`
                }`"
                alt="img"
                class="block rounded-lg hover:rounded-xl hover:shadow-xl hover:cursor-pointer"
              />
              <div class="mb-2">
                <span v-if="event.link">
                  Links:
                  <a v-for="link in event.link" :href="link" target="_blank">{{
                    link
                  }}</a>
                </span>
              </div>
            </div>
          </div>
          <div class="flex items-center justify-between flex-1">
            <div
              class="rounded-3xl py-2 pl-3 pr-4 flex justify-between items-center gap-4"
              :style="[`background-color: ${group.color};`]"
            >
              <div class="bg-background rounded-full w-4 h-4" />
              <p class="">{{ event.date }}</p>
            </div>
            <p></p>
          </div>
        </section>

        <section
          v-else
          class="w-full flex items-start justify-between p-4 max-md:p-2 max-sm:flex-col max-sm:gap-2"
        >
          <div
            class="flex items-center justify-between flex-1 max-md:absolute max-md:left-[1rem]"
          >
            <p></p>
            <div
              class="rounded-3xl py-2 pl-4 pr-3 flex justify-between items-center gap-4"
              :style="[`background-color: ${group.color};`]"
            >
              <div class="bg-background rounded-full w-4 h-4 md:hidden" />
              <p class="">{{ event.date }}</p>
              <div class="bg-background rounded-full w-4 h-4 max-md:hidden" />
            </div>
          </div>
          <div
            class="w-[48%] flex justify-between max-md:w-9/12 max-sm:w-full max-md:mt-14"
          >
            <p></p>
            <div
              class="bg-background-50 w-11/12 py-2 px-4 rounded-xl drop-shadow-xl"
            >
              <h2 class="text-xl font-semibold">{{ event.name }}</h2>
              <p class="text-lg">{{ event.description }}</p>
              <img
                v-if="event.image"
                @click="`${event.image ? openImageModal(event.image) : ''}`"
                :src="`${
                  event.image.startsWith('http')
                    ? `${event.image}`
                    : `${event.image}`
                }`"
                alt="img"
                class="block rounded-lg hover:rounded-xl hover:shadow-xl hover:cursor-pointer"
              />
              <div class="mb-2">
                <span v-if="event.link">
                  Links:
                  <a v-for="link in event.link" :href="link" target="_blank">{{
                    link
                  }}</a>
                </span>
              </div>
            </div>
          </div>
        </section>
      </section>
    </section>
  </main>
  <section
    v-if="imageModalVisible"
    @click="closeImageModal"
    class="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-40 p-4"
  >
    <div
      class="relative w-full h-full flex flex-col items-center justify-center"
    >
      <img
        :src="`${
          imageModalImage.startsWith('http')
            ? `${imageModalImage}`
            : `${imageModalImage}`
        }`"
        alt="img"
        class="max-w-full max-h-full cursor-pointer object-contain rounded-xl"
      />
    </div>
  </section>
  <footer class="flex justify-between px-4 py-2 text-sm shrink-0 bg-background">
    <p>The Fall of the Roman Republic | © 2024</p>
    <a href="https://github.com/cqb13" target="_blank"
      >Created by Maksim Straus</a
    >
  </footer>
</template>
