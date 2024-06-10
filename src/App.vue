<script setup lang="ts">
import { ref, watch } from "vue";
import { Event } from "./data/events";
import events from "./data/events";

type YearGroup = {
  year: string;
  color: string;
  events: Event[];
};

const flipped = ref(false);

const colors: string[] = ["#ca5454", "#e8a040", "#fcdd75", "#ebc59c"];

const switchColor = (currentColor: number) => {
  if (currentColor === colors.length - 1) {
    return 0;
  } else {
    return currentColor + 1;
  }
};

const groupedEvents = ref<YearGroup[]>([]);
let eventIndex = 0;

const eventCount = events.length;

const groupEvents = () => {
  let currentYear = "";
  let currentYearGroup: YearGroup = { year: "", color: "", events: [] };
  let currentColor = 3; // to start at first color

  const eventsToProcess = flipped.value ? [...events].reverse() : events;

  groupedEvents.value = [];

  eventsToProcess.forEach((timelineEvent) => {
    const year = timelineEvent.date.replace(" BCE", "").replace(" CE", "");

    if (year !== currentYear) {
      currentYear = year;
      currentColor = switchColor(currentColor);
      const colorStr = colors[currentColor];
      currentYearGroup = { year: year, color: colorStr, events: [] };
      groupedEvents.value.push(currentYearGroup);
    }

    const timelineEventWithIndex = { ...timelineEvent, index: eventIndex };

    currentYearGroup.events.push(timelineEventWithIndex);
    eventIndex++;
  });
};

groupEvents();

watch(flipped, () => {
  groupEvents();
});

const flip = () => {
  flipped.value = !flipped.value;
};

const toTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const toBottom = () => {
  window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
};

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
  return (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    ) || window.innerWidth < 768
  );
};

const scrollProgress = ref(0);

window.addEventListener("scroll", () => {
  const winScroll = document.documentElement.scrollTop;
  const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  scrollProgress.value = (winScroll / height) * 100;
});
</script>
<template>
  <header class="bg-primary-800 p-10 py-24">
    <section>
      <h1 className="text-center text-6xl font-heading text-background-50">
        The Fall of the Roman Republic
      </h1>
    </section>
  </header>
  <div
    :class="[
      `bg-primary-800 opacity-50 h-4 fixed left-0 z-10 top-0 ${
        scrollProgress >= 99.9 ? '' : 'rounded-br-lg'
      }`,
    ]"
    :style="[`width: ${scrollProgress}%;`]"
  />
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
        <p class="font-medium text-lg">{{ group.year }} BCE</p>
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
                  <a
                    v-for="link in event.link"
                    :href="link.url"
                    target="_blank"
                    >{{ link.name }}</a
                  >
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
              <p class="">
                {{
                  `${event.additionalDate ? event.additionalDate : ""} ${
                    event.date
                  }`
                }}
              </p>
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
              <p class="">
                {{
                  `${event.additionalDate ? event.additionalDate : ""} ${
                    event.date
                  }`
                }}
              </p>
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
                  <a
                    v-for="link in event.link"
                    :href="link.url"
                    target="_blank"
                    >{{ link.name }}</a
                  >
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
  <section
    class="fixed bottom-8 right-5 bg-background-50 py-2 px-4 rounded-xl drop-shadow-xl flex gap-2 items-center justify-center"
  >
    <button
      @click="flip"
      class="bg-primary-800 text-background-50 rounded-full w-8 h-8 flex items-center justify-center active:bg-primary-700 transition-all duration-200 ease-in-out hover:bg-primary-900"
    >
      <svg
        width="20px"
        height="20px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="fill-background-50"
      >
        <path
          d="M6.293 4.293a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1-1.414 1.414L8 7.414V19a1 1 0 1 1-2 0V7.414L3.707 9.707a1 1 0 0 1-1.414-1.414l4-4zM16 16.586V5a1 1 0 1 1 2 0v11.586l2.293-2.293a1 1 0 0 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 1.414-1.414L16 16.586z"
        />
      </svg>
    </button>
    <button
      @click="toTop"
      class="bg-primary-800 text-background-50 rounded-full w-8 h-8 flex items-center justify-center active:bg-primary-700 transition-all duration-200 ease-in-out hover:bg-primary-900"
    >
      <svg
        fill="none"
        width="20px"
        height="20px"
        viewBox="-5 -7.5 24 24"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMinYMin"
        class="fill-background-50"
      >
        <path
          d="M7.071 2.828l-4.95 4.95A1 1 0 0 1 .707 6.364L6.364.707a1 1 0 0 1 1.414 0l5.657 5.657a1 1 0 0 1-1.414 1.414l-4.95-4.95z"
        />
      </svg>
    </button>
    <button
      @click="toBottom"
      class="bg-primary-800 text-background-50 rounded-full w-8 h-8 flex items-center justify-center active:bg-primary-700 transition-all duration-200 ease-in-out hover:bg-primary-900"
    >
      <svg
        fill="none"
        width="20px"
        height="20px"
        viewBox="-5 -8 24 24"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMinYMin"
        class="fill-background-50"
      >
        <path
          d="M7.071 5.314l4.95-4.95a1 1 0 1 1 1.414 1.414L7.778 7.435a1 1 0 0 1-1.414 0L.707 1.778A1 1 0 1 1 2.121.364l4.95 4.95z"
        />
      </svg>
    </button>
    <p>{{ eventCount }} events</p>
  </section>
  <footer class="flex justify-between px-4 py-2 text-sm shrink-0">
    <p>The Fall of the Roman Republic | © 2024</p>
    <a href="https://github.com/cqb13" target="_blank"
      >Created by Maksim Straus</a
    >
  </footer>
</template>
