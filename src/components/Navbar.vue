<template>
   <b-navbar type="is-primary" fixed-top>
        <template slot="brand">
            <b-navbar-item tag="router-link" :to="{ name: 'Home' }">
                <img
                    src="/navbar-icon.svg"
                    alt="Ciudades comunes"
                >
            </b-navbar-item>
        </template>

        <template slot="end">
            <b-navbar-item tag="router-link" :to="{ name: 'Home' }">
                Inicio
            </b-navbar-item>
            <b-navbar-item tag="router-link" :to="{ name: 'Agenda' }">
                Agenda
            </b-navbar-item>
            <b-navbar-item tag="router-link" :to="{ name: 'QuienesSomos' }">
                Quienes somos
            </b-navbar-item>
            <b-navbar-item tag="router-link" :to="{ name: 'DentroFuera' }">
                DentroFuera
            </b-navbar-item>
            <b-navbar-item tag="router-link" :to="{ name: 'Talleres' }">
                Talleres
            </b-navbar-item>
            <b-navbar-item href="https://docs.google.com/forms/d/e/1FAIpQLSe18mgHqJPUof9o4U2z2MOuAaakrmKd7ddhe1-h575etxlyAQ/viewform" target="_blank">
                Inscribite
            </b-navbar-item>
            <b-navbar-item href="https://facebook.com/ciudadescomunes" target="_blank">
                <i class="fab fa-facebook fa-lg"></i><span class="is-hidden-desktop">&nbsp;Facebook</span>
            </b-navbar-item>
            <b-navbar-item href="https://instagram.com/ciudades.comunes" target="_blank">
                <i class="fab fa-instagram fa-lg"></i><span class="is-hidden-desktop">&nbsp;Instagram</span>
            </b-navbar-item>
            <b-navbar-item href="https://twitter.com/ciudadescomunes" target="_blank">
                <i class="fab fa-twitter fa-lg"></i><span class="is-hidden-desktop">&nbsp;Twitter</span>
            </b-navbar-item>
        </template>
    </b-navbar>
</template> 