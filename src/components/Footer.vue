<template>
    <footer>
        <a href="https://github.com/OLAHA-RVR">Github</a>
        <img src="../assets/logo/logo github.png" alt="Github" class="community">
        <a href="https://www.instagram.com/">Instagram</a>
        <img src="../assets/logo/logo instagram.png" alt="Instagram" class="community">
        <a href="https://fr.linkedin.com/">Linkedin</a>
        <img src="../assets/logo/logo linkedin.png" alt="linkedin" class="community">
        <p>Mise a jour le <time datetime="2025-01-15">10/01/2025</time></p>
    </footer>
</template>

<style scoped>

    footer {
        position: relative;
        bottom: 0;
        width: 100%;
        background-color: #1c1b23;
        color: white;
        text-align: center;
        padding: 0rem 0;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    nav{
        margin: 0;
        display: flex;
        gap: 25px;
        margin-bottom: 15px;
    }

a {
    display: block;
    position: relative;
    justify-content: center;
    color: aliceblue;
}
.community {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 0.5rem;
    width: 20px;
    height: 20px;
}
</style>