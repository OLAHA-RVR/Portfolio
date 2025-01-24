<template>  
        <section id="contact">
            <form action="mailto:ouaalahakima@gmail.com" method="post" enctype="plain/text">
                <h2>Contact</h2>
                <div class="input-container">
                    <input type="text" id="lastname" placeholder="Nom">
                </div>
                <div class="input-container">
                    <input type="text" id="name" placeholder="Prénom">
                </div>
                <div class="input-container">
                    <input type="text" id="object" placeholder="Objet" name="object">
                </div>
                <div class="input-container message">
                    <textarea id="message" rows="10" cols="40" name="message"></textarea>
                </div>
                <button type="submit" ref="button"  value="send">Envoyer</button>
            </form>
        </section>
</template>

<style scoped>
    section#contact {
        display: flex;
        justify-content: center;
        margin-left: 0px;
        margin-top: 250px;
        margin-bottom: 100px;
    }

    form {
        display: flex;
        flex-direction: column;
        width: 700px;
        border: 3px solid black;
        border-radius: 15px;
        background-color: rgb(51, 49, 49);
    }

    h2{
        text-align: center;
        font-weight: bold;
        height: 35px;
        background-color: rgb(51, 49, 49);
        border-top-left-radius: 13px;
        border-top-right-radius: 13px;
    }
    

    form .input-container input {
        background-color: rgb(211, 211, 211);
        color: rgb(0, 0, 0);
        width: 100%;
        height: 100%;
        font-size: 1.2rem;
    }

    textarea {
        border-radius: 5px;
        background-color: rgb(211, 211, 211);
        width: 100%;
        margin-top: 5px;
        border-top: 2px solid black;
        border-bottom: 2px solid black;
        font-size: 1.1rem;
    }

    form button   {
        width: 100px;
        background-color: rgb(25, 25, 126);
        color: white;
        padding: 4px;
        font-weight: bold;
        border-radius: 4px;
        margin-bottom: 15px;
        align-self: flex-end;
        margin-right: 15px;
    }
    
</style>