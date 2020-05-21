<script>
  import Button from "../components/atoms/Button.svelte";
  import Content from "../components/layouts/Content.svelte";
  import PageTitle from "../components/PageTitle.svelte";
  import Blockquote from "../components/molecules/Blockquote.svelte";
  import Figure from "../components/molecules/Figure.svelte";
  import { Tabs, TabList, TabPanel, Tab } from '../components/molecules/tabs.js';
  import List from "../components/molecules/List.svelte";
</script>

<PageTitle title="Artwork" />

<Content>
  <div class="col-desk-6 col-tab-5 col-mob-4">
    <Figure src="img/detalle1.jpg" alt="Alt de imagen" caption="Descripción" />
  </div>

  <div class="col-desk-6 col-tab-5 col-mob-4">
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit,
      laboriosam, necessitatibus hic tempore quis soluta, dignissimos culpa ut
      inventore itaque quo ipsa animi officia laudantium eligendi. Dolorum velit
      doloremque
      <a href="#">voluptatum</a>
      !
    </p>
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit,
      laboriosam, necessitatibus hic tempore quis soluta, dignissimos culpa ut
      inventore itaque quo ipsa animi officia laudantium eligendi. Dolorum velit
      doloremque voluptatum!. Lorem ipsum,
      <strong>dolor</strong>
      sit amet consectetur adipisicing elit. Fugit, laboriosam, necessitatibus
      hic tempore quis soluta, dignissimos culpa ut inventore itaque quo ipsa
      animi officia laudantium eligendi. Dolorum velit doloremque voluptatum!
    </p>
    <Button text="Call to action" />
    <Button text="Call to action 2" />
  </div>

  <div class="col-desk-6 col-tab-5 col-mob-4">
    <Blockquote
      quote="Lo más importante en la vida es que lo más importante sea lo más
      importante"
      author="STEPHEN COVEY" />
  </div>

  <div class="col-desk-6 col-tab-5 col-mob-4">
    <Blockquote
      quote="Todo según el número, el peso y la medida."
      author="Pitágoras" />
  </div>

  <div class="col-desk-6 col-tab-10 col-mob-4">
    <Tabs>
      <TabList>
        <Tab>one</Tab>
        <Tab>two</Tab>
        <Tab>three</Tab>
        <Tab>three</Tab>
        <Tab>five</Tab>
      </TabList>

      <TabPanel>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt blanditiis distinctio obcaecati, perferendis voluptatibus est nobis, iusto provident illum vel libero corrupti aliquid, dolor accusantium saepe voluptatum rem odit! Minus!</p>
      </TabPanel>

      <TabPanel>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint explicabo modi ut adipisci aperiam repudiandae vitae non minus consequuntur, cumque aliquam odio. Dolores, aut reiciendis. Odit facilis ratione reprehenderit fugiat.</p>
      </TabPanel>

      <TabPanel>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi reprehenderit corporis corrupti ipsum quia eligendi aperiam illum nemo nulla voluptatum tenetur illo eius quisquam totam, pariatur vel consectetur quae unde.</p>
      </TabPanel>

      <TabPanel>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi reprehenderit corporis corrupti ipsum quia eligendi aperiam illum nemo nulla voluptatum tenetur illo eius quisquam totam, pariatur vel consectetur quae unde.</p>
      </TabPanel>

      <TabPanel>
        <p>5 Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi reprehenderit corporis corrupti ipsum quia eligendi aperiam illum nemo nulla voluptatum tenetur illo eius quisquam totam, pariatur vel consectetur quae unde.</p>
      </TabPanel>
    </Tabs>
  </div>

  <div class="col-desk-6 col-tab-5 col-mob-4">
    <List>item</List>
  </div>

</Content>
