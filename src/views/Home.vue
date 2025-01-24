<script setup>
import TheHeader from "../components/Header.vue"
import TheFooter from "../components/Footer.vue"
import ProjectView from "@/components/ProjectView.vue";
import Contact from "../components/Contact.vue"
</script>


<template>
    <div class="page-container">
    <TheHeader></TheHeader>
        <!-- Setting up main content -->
    <section class="main">
                <a class="anchor" id="presentation"></a>
            <section>
                    <img src="/src/assets/logo/logoportfolio.png" alt="logo" class="logo">
                    <h1>Portfolio OUAALA Hakima</h1>
                    <p> Passionnée par le monde numérique et les technologies, je suis une future développeuse web en pleine transition professionnelle. Anciennement gestionnaire administrative, j'ai développé un sens aigu de l'organisation, une capacité à résoudre des problèmes complexes et une rigueur qui me servent aujourd'hui dans le développement web.
                    <br>
                    Actuellement en formation, j'acquiers les compétences nécessaires pour concevoir et développer des sites web modernes et dynamiques, tout en approfondissant mes connaissances dans des langages comme HTML, CSS, JavaScript, ainsi que des outils et frameworks populaires.
                    <br>
                    Ce portfolio est une vitrine de mes projets, témoignant de mon apprentissage et de ma passion pour ce métier. Mon objectif est de collaborer avec des entreprises et des clients sur des missions qui combinent créativité, innovation et excellence technique.
                    <br>
                    N'hésitez pas à explorer mes réalisations et à me contacter pour discuter de futures opportunités. Je suis enthousiaste à l'idée de contribuer à vos projets avec une approche structurée et un regard neuf, mêlant mes compétences passées et mes aspirations actuelles.
                    </p>
            </section>
    <section class="slideshow-container">
        <a class="anchor" id="project"></a>
    <h2 class="project-title-section">Mes futurs projets</h2>
    <img src="../assets/logo/au petit village.jpg" alt="Projet1" class="projet">
    <img src="../assets/logo/commentaires.png" alt="Projet2" class="projet">
    <img src="../assets/logo/la vie des plantes.jpg" alt="Projet3" class="projet">
    <img src="../assets/logo/Probeats.png" alt="projet3" class="projet">
    <h3>Une petite présentation de mes futurs projets: Dynamiser le site "Au petit village" avec Angular.JS</h3>
    <ul>
        <li>Dynamiser le site Au petit village avec Angular.JS</li>
        <li>Dynamiser un espace commentaire</li>
        <li>Créer un site vitrine pour La vie des plantes avec WordPress</li>
        <li>Maquetter le site Probeats avec Figma</li>
    </ul>
    <!-- remettre ici mes infos projets si cela ne fonctionne pas-->
    </section>
    </section>
    <Contact></Contact>
    <TheFooter></TheFooter>
    </div>
  
</template>

<style scoped>

.page-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.main section{
  margin-left: 130px;
  margin-top: 80px;
  color: white;
 }

 a.anchor {
  display: block;
  position: relative;
  top: -200px;
  visibility: hidden;
 }


 .main a {
  text-decoration: none;
  color: white;
  max-width: 300px;
 }

 .main h1 {
  font-weight: bold;
  font-size: 3.5rem;
  margin-bottom: 15px;
  max-width: 300px;
  
 }


 p {
  font-size: 1.2rem;
  width: 700px;
 }

.logo {
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    max-width: 150px;
    height: auto;
    border-radius: 50%;
    box-shadow: 0 4px 8px rgba(red, green, blue, alpha);
}
.projet {
    width: 200px;
}

</style>