<script>
  import PageTitle from "../components/PageTitle.svelte";
  import Content from "../components/layouts/Content.svelte";
  import {
    Tabs,
    TabList,
    TabPanel,
    Tab
  } from "../components/molecules/tabs.js";
</script>

<svelte:head>
  <title>TODH wellcome</title>
</svelte:head>

<PageTitle title="👋 Hola" />

<Content>

  <div class="col-desk-6 col-tab-10 col-mob-4">
    <h2>
      En este espacio voy hablando y mostrando las cosas que e apasionan. Arte,
      diseño frontend, conciencia, etc...
    </h2>
  </div>
  <div class="col-desk-6 col-tab-10 col-mob-4">
    <Tabs>
      <TabList>
        <Tab>Cero</Tab>
        <Tab>Uno</Tab>
        <Tab>Dos</Tab>
        <Tab>Tres</Tab>
        <Tab>Cuatro</Tab>
      </TabList>

      <TabPanel>
        <p>Un campo indeterminado de potencialidad pura. (Fase 0, espacio)</p>
      </TabPanel>

      <TabPanel>
        <p>Una voluntad que decide querer ser (Fase 1, el punto)</p>

      </TabPanel>

      <TabPanel>
        <p>Dualidad, un dentro y un afuera, división (Fase 2, la linea)</p>
      </TabPanel>

      <TabPanel>
        <p>
          Vinculo, razón, conexión de las dos mitades (Fase 3, la superficie)
        </p>
      </TabPanel>

      <TabPanel>
        <p>Materialización, "algo" cristaliza y sucede (Fase 4, el objeto.)</p>
      </TabPanel>
    </Tabs>
  </div>
</Content>
