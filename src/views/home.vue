<template>
    <div class="p-4">
        <div class="flex flex-col md:flex-row w-full gap-4">

            <aside class="flex flex-col w-full md:w-1/3 space-y-4" id="left-side">
                <ProfilePicture />
                <MySocials />
                <div class="flex flex-wrap gap-2 px-4">
                    <Chips>C#</Chips>
                    <Chips>.NET</Chips>
                    <Chips>C++</Chips>
                    <Chips>Java</Chips>
                    <Chips>TypeScript</Chips>
                    <Chips>JavaScript</Chips>
                    <Chips>jQuery</Chips>
                    <Chips>SQL</Chips>
                    <Chips>React</Chips>
                    <Chips>Laravel</Chips>
                    <Chips>Angular</Chips>
                    <Chips>Vue</Chips>
                </div>
                <Experience />
                <Education />

            </aside>

            <main class="w-full md:w-2/3 space-y-4" id="right-side">
                <MyProjects />
                <div class="grid grid-cols-2">
                    <Projects type="frontend">
                        <template #title>
                            <h1>Portfolio Website</h1>
                        </template>

                        <template #content>
                            <h2>A responsive portfolio website built with Vue.js and Tailwind CSS, showcasing my
                                projects,
                                skills, and experience with smooth performance and mobile-friendly design.</h2>
                        </template>
                    </Projects>


                </div>
            </main>

        </div>
    </div>
</template>
<script setup lang="ts">
import ProfilePicture from '../components/profile_pic.vue'
import MyProjects from '../components/my_projects.vue'
import MySocials from '../components/my_socials.vue'
import Chips from '../components/chips.vue'
import Experience from '../components/experience.vue'
import Education from '../components/education.vue'
import Projects from '../components/projects.vue'

</script>
