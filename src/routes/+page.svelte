<script>
    import { onMount } from "svelte";
    import "flowbite";
    import { Timeline, TimelineItem, Button } from 'flowbite-svelte';
    import { Heading, P } from 'flowbite-svelte';
    import { Indicator } from 'flowbite-svelte';
    import  image from "$lib/images/main.jpg"
    import  fullbaterias from "$lib/images/fullbaterias.png"
    import  fullneumaticos from "$lib/images/fullneumaticos.png"
    import  estetica from "$lib/images/dubo.png"
    import  oto from "$lib/images/oto.png"
    import { Avatar, Tooltip } from 'flowbite-svelte';
    import { Card } from 'flowbite-svelte';
    import { Tabs, TabItem } from 'flowbite-svelte';
    import {   DesktopPcSolid,  ShieldSolid, FireSolid,  HammerSolid, MobilePhoneSolid, RocketSolid,  StoreSolid, CodeBranchSolid,  CloudArrowUpSolid, ClockSolid } from 'flowbite-svelte-icons';
    import { Li, List } from 'flowbite-svelte';
    import { Img } from 'flowbite-svelte';

  
    let email = "";
    let subject = "";
    let message = "";
    let successMessage = "";
    let errorMessage = "";
  
    const sendEmail = async () => {
      if (!email || !subject || !message) {
        errorMessage = "Todos los campos son obligatorios.";
        successMessage = "";
        return;
      }
  
      try {
        const response = await fetch("https://api.emailservice.com/send", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            subject,
            message,
          }),
        });
  
        if (response.ok) {
          successMessage = "Correo enviado con éxito.";
          errorMessage = "";
          email = "";
          subject = "";
          message = "";
        } else {
          errorMessage = "Error al enviar el correo. Intente de nuevo.";
          successMessage = "";
        }
      } catch (error) {
        errorMessage = "No se pudo conectar al servidor.";
        successMessage = "";
      }
    };
  </script>
  
  <main class="bg-primary text-secondary min-h-screen flex flex-col">
    
    
  
    <section id="informacion" class="py-8" >
        <div class="container mx-auto px-4 ">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="text-secondary flex  justify-center grid-cols-2">
              
              <Avatar data-name="Jese Leos"  src={image} size="none" class="w-80 h-80"/>
              
            </div>
            <div class="grid justify-start items-center grid-rows-2 ">

              <div class="grid grid-rows-2">
                <Heading tag="h1" class="mb-2" customSize="text-4xl font-extrabold">Werner Müller Hudats</Heading>
                <Heading tag="h2"  class="text-xl font-bold mb-2">Fullstack web-developer</Heading>
                <p class="text-lg text-gray-500 dark:text-gray-400">soy un apasionado y experimentado Desarrollador Web con enfoque tanto en el desarrollo front-end como en el back-end.
                  Tengo 6 años de experiencia en la industria del desarrollo web, trabajando en una variedad de proyectos y tecnologías.</p>
              </div>
              
              <div class="grid grid-cols-4">
                <span class="flex items-center"><Indicator size="sm" color="orange" class="me-1.5" />Svelte</span>
                <span class="flex items-center"><Indicator size="sm" color="teal" class="me-1.5" />React</span>
                <span class="flex items-center"><Indicator size="sm" color="dark" class="me-1.5" />Next.js</span>
                <span class="flex items-center"><Indicator size="sm" color="yellow" class="me-1.5" />Javascript</span>
                <span class="flex items-center"><Indicator size="sm" color="green" class="me-1.5" />Node.js</span>
                <span class="flex items-center"><Indicator size="sm" color="teal" class="me-1.5" />Php</span>
                <span class="flex items-center"><Indicator size="sm" color="teal" class="me-1.5" />Wordpress</span>
                <span class="flex items-center"><Indicator size="sm" color="red" class="me-1.5" />Mysql</span>
                <span class="flex items-center"><Indicator size="sm" color="teal" class="me-1.5" />Docker</span>
                <span class="flex items-center"><Indicator size="sm" color="purple" class="me-1.5" />Seo</span>
                
              </div>
             
            </div>
          </div>
        </div>
      </section>
  
    
    <section id="servicios" >
        <div class="container mx-auto px-4">
          <h2 class="text-xl font-bold mb-4 text-center">Servicios</h2>
        <div class="grid md:grid-cols-3 gap-10 sm:grid-cols-1">
          <Card>
            <DesktopPcSolid class="w-8 h-8 mb-3 text-gray-500 dark:text-gray-400" />
            <a href="/">
              <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Diseño y desarrollo de sitios web</h5>
            </a>
            <List tag="ul" class="space-y-1 text-gray-500 dark:text-gray-400">
              <Li>Páginas web corporativas.</Li>
              <Li>Portafolios personales o profesionales.</Li>
              <Li>Sitios web informativos o blogs.</Li>
            </List>
          </Card>

          <Card>
            <HammerSolid class="w-8 h-8 mb-3 text-gray-500 dark:text-gray-400" />
            <a href="/">
              <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Desarrollo a medida</h5>
            </a>
            <List tag="ul" class="space-y-1 text-gray-500 dark:text-gray-400">
              <Li>Aplicaciones web personalizadas con frameworks como React, Svelte, Next.js.</Li>
              <Li>Backend con Node.js, o PHP (Laravel).</Li>
            </List>
          </Card>

          <Card>
            <StoreSolid class="w-8 h-8 mb-3 text-gray-500 dark:text-gray-400" />
            <a href="/">
              <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Integración de CMS (Gestores de contenido)</h5>
            </a>
            <List tag="ul" class="space-y-1 text-gray-500 dark:text-gray-400">
              <Li>WordPress o plataformas similares para facilitar a los clientes la administración de sus contenidos.</Li>
            </List>
          </Card>
         
          <Card>
            <MobilePhoneSolid class="w-8 h-8 mb-3 text-gray-500 dark:text-gray-400" />
            <a href="/">
              <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Optimización para dispositivos móviles</h5>
            </a>
            <List tag="ul" class="space-y-1 text-gray-500 dark:text-gray-400">
              <Li>Diseño responsive para garantizar que el sitio funcione bien en móviles, tablets y escritorio.</Li>
            </List>
          </Card>

          

          <Card>
            <ShieldSolid class="w-8 h-8 mb-3 text-gray-500 dark:text-gray-400" />
            <a href="/">
              <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Seguridad web</h5>
            </a>
            <List tag="ul" class="space-y-1 text-gray-500 dark:text-gray-400">
              <Li>Implementación de certificados SSL.</Li>
            </List>
          </Card>

          <Card>
            <FireSolid class="w-8 h-8 mb-3 text-gray-500 dark:text-gray-400" />
            <a href="/">
              <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Optimización de velocidad y rendimiento</h5>
            </a>
            <List tag="ul" class="space-y-1 text-gray-500 dark:text-gray-400">
              <Li>Optimización de tiempos de carga, imágenes y scripts.</Li>
              <Li>Configuración de caché y compresión.</Li>
            </List>
          </Card>


          <Card>
            <RocketSolid class="w-8 h-8 mb-3 text-gray-500 dark:text-gray-400" />
            <a href="/">
              <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">SEO</h5>
            </a>
            <List tag="ul" class="space-y-1 text-gray-500 dark:text-gray-400">
              <Li>Configuración de SEO on-page.</Li>
              <Li>Instalación de herramientas como Google Analytics o Google Search Console.</Li>
            </List>
          </Card>

          <Card>
            <CodeBranchSolid class="w-8 h-8 mb-3 text-gray-500 dark:text-gray-400" />
            <a href="/">
              <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Migración de sitios</h5>
            </a>
            <List tag="ul" class="space-y-1 text-gray-500 dark:text-gray-400">
              <Li>Migración desde un CMS o servidor a otro.</Li>
            </List>
          </Card>

          <Card>
            <CloudArrowUpSolid class="w-8 h-8 mb-3 text-gray-500 dark:text-gray-400" />
            <a href="/">
              <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Hosting y dominios</h5>
            </a>
            <List tag="ul" class="space-y-1 text-gray-500 dark:text-gray-400">
              <Li>Servicios de hosting en asociación con proveedores.</Li>
              <Li>Asistencia en la compra y configuración de dominios.</Li>
            </List>
          </Card>

          <Card>
            <ClockSolid class="w-8 h-8 mb-3 text-gray-500 dark:text-gray-400" />
            <a href="/">
              <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Soporte técnico 24/7</h5>
            </a>
            <List tag="ul" class="space-y-1 text-gray-500 dark:text-gray-400">
              <Li>Respuesta rápida a problemas críticos.</Li>
            </List>
          </Card>

        </div>
          
        </div>
      </section>

      <section id="envio-correos" class="flex-grow flex items-center justify-center py-8">
        <div class="container mx-auto px-4 flex justify-center">
          <div class=" p-8 rounded w-full">
            <h1 class="text-2xl font-bold mb-4 text-center">Proyectos (Portafolios)</h1>

            <Tabs tabStyle="underline" class="">
              <TabItem open title="fullneumaticos.cl" class="[&_button]:hover:border-secondary">

                <div class="grid grid-cols-2 justify-center">
                  <div>
                <p class="text-sm text-gray-500 dark:text-gray-400" >
                  
                  Desarrollo a medida, SEO, Optimización de velocidad y rendimiento, Mantenimiento mensual.
                </p>
              </div>
              <div>
                <Img src={fullneumaticos} alt="fullneumaticos" size="md:max-w-xl sm:max-w-xm" class="rounded-lg border-secondary border-2" />
              </div>
              </div>

              </TabItem>
              <TabItem title="fullbaterias.cl" class="[&_button]:hover:border-secondary">
                <div class="grid grid-cols-2 justify-center">
                  <div>
                <p class="text-sm text-gray-500 dark:text-gray-400">
                  
                  SEO, Optimización de velocidad y rendimiento.
                </p>
              </div>
              <div>
                <Img src={fullbaterias} alt="fullbaterias" size="md:max-w-xl sm:max-w-xm" class="rounded-lg border-secondary border-2"  />
              </div>
              </div>
              </TabItem>
              <TabItem title="otoacustic.cl" class="[&_button]:hover:border-secondary">
                <div class="grid grid-cols-2 justify-center">
                  <div>
                <p class="text-sm text-gray-500 dark:text-gray-400">
                  
                  Desarrollo a medida, SEO, Optimización de velocidad y rendimiento, Mantenimiento mensual.
                </p>
                </div>
                <div>
                <Img src={oto} alt="otoacustic" size="md:max-w-xl sm:max-w-xm" class="rounded-lg border-secondary border-2"  />
              </div>
              </div>
              </TabItem>
              <TabItem title="duboestetica.cl" class="[&_button]:hover:border-secondary">
                <div class="grid grid-cols-2 justify-center">
                  <div>
                <p class="text-sm text-gray-500 dark:text-gray-400">
                  
                  Desarrollo a medida, SEO, Optimización de velocidad y rendimiento, Mantenimiento mensual.
                </p>
              </div>
                <div>
                <Img src={estetica} alt="duboestetica" size="md:max-w-xl sm:max-w-xm" class="rounded-lg border-secondary border-2"  />
              </div>
            </div>
              </TabItem>
            </Tabs>
          </div>
        </div>
      </section>
  
    <section id="envio-correos" class="flex-grow flex items-center justify-center py-8">
        <div class="container mx-auto px-4 flex justify-center">
          <div class=" p-8 rounded w-full max-w-3xl ">
            <h1 class="text-2xl font-bold mb-4 text-center">Contactame</h1>
            
    
            {#if successMessage}
              <div class="bg-green-700 text-white p-3 rounded mb-4">
                {successMessage}
              </div>
            {/if}
    
            {#if errorMessage}
              <div class="bg-red-700 text-white p-3 rounded mb-4">
                {errorMessage}
              </div>
            {/if}
    
            <form on:submit|preventDefault={sendEmail}>
              <div class="mb-4">
                
                <input
                  id="email"
                  type="email"
                  bind:value={email}
                  class="border border-gray-600 bg-accent text-secondary rounded w-full p-2 focus:ring focus:ring-blue-500"
                  required
                  placeholder="Correo Electrónico"
                />
              </div>
    
              <div class="mb-4">
              
                <input
                  id="subject"
                  type="text"
                  bind:value={subject}
                  class="border border-gray-600 bg-accent text-secondary rounded w-full p-2 focus:ring focus:ring-blue-500"
                  required
                  placeholder="Asunto"
                />
              </div>
    
              <div class="mb-4">
           
                <textarea
                  id="message"
                  bind:value={message}
                  class="border border-secondary bg-accent text-secondary rounded w-full p-2 focus:ring focus:ring-blue-500"
                  rows="5"
                  required
                  placeholder="Mensaje"
                ></textarea>
              </div>
    
              <button
                type="submit"
                class="bg-ternary text-secondary font-medium py-2 px-4 rounded-xl border-2 hover:border-secondary w-full"
              >
                Enviar
              </button>
            </form>
          </div>
    
         
        </div>
      </section>
  
   
  </main>
  
  <style>
    main {
      font-family: Arial, sans-serif;
    }


  
  </style>
  