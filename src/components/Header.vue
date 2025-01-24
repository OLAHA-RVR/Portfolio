<script setup>
import { onMounted, ref } from "vue";
import Contact from "./Contact.vue"

onMounted(() => {
    let linksContainer = document.querySelector(".navigation");
    let links = linksContainer.querySelectorAll("a");
    let project = document.querySelector("#project");
    let contact = document.querySelector("#contact");
    let presentation = document.querySelector("#presentation");

    //Function to set an underline when scrolling on the right section
    function changeStyleOnScroll() {
        let projectTop = project.offsetTop;
        let contactTop = 600;
        let presentationTop = -20;
        window.onscroll = () => {
            let currentSection = "";
            if (scrollY >= contactTop) {
                currentSection = contact.id
            } else if (scrollY >= projectTop) {
                currentSection = project.id;
            } else if (scrollY >= presentationTop) {
                currentSection = presentation.id;
            }

            links.forEach(link => {
                link.classList.remove("active");
                if(link.classList.contains(currentSection)){
                    link.classList.add("active");
                }
            })
        }
    }
    

    //Function to add underline when a link is clicked and remove the underline from the othes links
    function changeLinkStyleOnCLick() {
        links.forEach(link => {
        link.addEventListener("click",() => {
            links.forEach(link => {
                link.classList.remove("active");
            })
            link.classList.add("active");
        })
    })
    }
    
    changeLinkStyleOnCLick();
    changeStyleOnScroll()
})
</script>

<template>
    <header class="header-component">
        <div class="header-container">
            <a href="#presentation" target="_blank">
                <div class="logo-holder"></div>
            </a>
            <nav class="navigation">
                <a href="#presentation" class="presentation">Presentation</a>
                <a href="#project" class="project">Projects</a>
                <a href="#contact" class="contact">Contact</a>
            </nav>
        </div>
    </header>
</template>

<style scoped>
    .header-component {
        position: sticky;
        top: 1px;
        transform: translateY(-2px);
        display: flex;
        width: 100%;
        align-items: center;
        padding-bottom: 20px;
        z-index: 10;
        background: linear-gradient(45deg, var(--color-background), rgb(132, 97, 138));
        padding-top: 15px;
    }

    .header-container {
        display: flex;
        align-items: center;
        width: 100%;
    }
    
    .logo-holder {
        height: 65px;
        min-width: 65px;
        background-image: url(./icons/IconDocumentation.vue);
        background-size: cover;
        border-radius: 50%;
        margin-left: 40px;
    }
    
    .logo-holder:hover {
        box-shadow:  rgb(204, 204, 204) 1px 0 10px;
        transition-duration: 450ms;
        cursor: pointer;
    }
    
    .navigation a {
        text-decoration: none;
        color: white;
        font-size: 1.3rem;
    }

    .navigation a:active {
        text-decoration: underline;

    }

    .navigation a.active {
        text-decoration: underline;
    }


    .navigation a:hover {
        text-shadow: rgb(204, 204, 204) 1px 0 10px;
        transition-duration: 450ms;
        transform: scale(1.1);
    }
    

    .navigation {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        text-align: center;
        margin-right: 70px;
        margin-left: 30%;
        gap: 80px;
    }

    
</style>