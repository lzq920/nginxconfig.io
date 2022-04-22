"use strict";(self["webpackChunknginxconfig_io"]=self["webpackChunknginxconfig_io"]||[]).push([[416],{4416:(e,o,n)=>{n.r(o),n.d(o,{default:()=>X});const i={back:"Anterior",next:"Siguiente",enable:"activar",php:"PHP",ssl:"SSL",nginx:"NGINX",http:"HTTP",https:"HTTPS",letsEncrypt:"Let's Encrypt",python:"Python",wordPress:"WordPress",drupal:"Drupal",magento:"Magento",joomla:"Joomla",django:"Django",logging:"Registro",reverseProxy:"Proxy inverso",reverseProxyLower:"proxy inverso",restrict:"Restringir",path:"Ruta"};var a=n(8449);const r={title:`${i.nginx}Config`,description:`La forma más fácil de configurar un rendidor, seguro y estable servidor de ${i.nginx}.`,singleColumnMode:"Modo de columna única",splitColumnMode:"Modo de columna dividida",perWebsiteConfig:"Configuración por sitio web",addSite:"Agregar sitio",globalConfig:"Configuración global",setup:"Configuración",configFiles:"Archivos de configuración"},s={downloadConfig:"Descargar configuración",copyBase64:"Copiar Base64"},t={backToTop:"Ir al inicio",thisToolIs:"Esta herramienta es",openSourceOnGitHub:"open-source en GitHub",underThe:"bajo la",mit:"licencia MIT",license:"!",weWelcomeFeedbackAndContributions:"Agradecemos sus comentarios y contribuciones.",originallyCreatedBy:"Originalmente creado por",balintSzekeres:"Bálint Szekeres",maintainedBy:"mantenido por",digitalOcean:"DigitalOcean"},l={enableEncryptedSslConnection:`${i.enable} conexiones ${i.ssl} encriptadas`,http2:`${i.http}/2`,enableHttp2Connections:`${i.enable} conexiones ${i.http}/2`,http3:`${i.http}/3`,enableHttp3Connections:`${i.enable} conexiones ${i.http}/3`,forceHttps:`Forzar ${i.https}`,hsts:"HSTS",enableStrictTransportSecurity:`Para ${i.enable} Strict Transport Security, requiriendo conexiones HTTPS`,enableIncludeSubDomains:`Para ${i.enable} la directiva includeSubDomains, requiriendo conexiones HTTPS para TODOS los subdominios`,enablePreload:`Para ${i.enable} la directiva directive, decirle a los navegadores que siempre hagan solo conexiones HTTPS`,certificationType:"Tipo de certificado",customCertificate:"Certificado personalizado",letsEncryptEmail:`Correo para ${i.letsEncrypt}`,http3IsANonStandardModule:"HTTP/3 no es un modulo estandar de NGINX , verificar el ",http3NginxQuicReadme:"Readme de NGINX QUIC",http3OrThe:" o el ",http3CloudflareQuicheProject:"Projecto quiche de Cloudflare",http3ForBuildingNginxWithHttp3:" para saber como construir un NGINX con HTTP/3!"},c={byDomain:"por dominio",enableForThisDomain:`${i.enable} para este dominio`},d={phpIsDisabled:`${i.php} esta desactivado.`,phpCannotBeEnabledWithReverseProxy:`${i.php} no se puede habilitar mientras el proxy inverso está habilitado.`,phpCannotBeEnabledWithPython:`${i.php} no se puede habilitar mientras ${i.python} está habilitado.`,enablePhp:`${i.enable} ${i.php}`,wordPressRules:`Reglas de ${i.wordPress}`,enableWordPressRules:`${i.enable} reglas especificas de ${i.wordPress}`,drupalRules:`Reglas de ${i.drupal}`,enableDrupalRules:`${i.enable} reglas especificas de ${i.drupal}`,magentoRules:`Reglas de ${i.magento}`,enableMagentoRules:`${i.enable} reglas especificas de ${i.magento}`,joomlaRules:`Reglas de ${i.joomla}`,enableJoomlaRules:`${i.enable} reglas especificas de ${i.joomla}`,phpServer:`Servidor ${i.php}`,phpBackupServer:`Servidor ${i.php} de respaldo`,tcp:"TCP",hhvmSocket:"HHVM socket",php5Socket:"5.x socket",php70Socket:"7.0 socket",php71Socket:"7.1 socket",php72Socket:"7.2 socket",php73Socket:"7.3 socket",php74Socket:"7.4 socket",php80Socket:"8.0 socket",php81Socket:"8.1 socket",phpSocket:"PHP socket",custom:"Personalizado",disabled:"Desactivado"},u={presets:"Preajustes",itLooksLikeYouCustomisedTheConfig:"Parece que ha personalizado la configuración para este dominio. La elección de un nuevo ajuste preestablecido puede restablecer o cambiar algunas de las configuraciones que ha personalizado.",frontend:"Frontend",nodeJs:"Node.js",singlePageApplication:"Single-page application"},p={pythonIsDisabled:`${i.python} esta desactivado.`,pythonCannotBeEnabledWithReverseProxy:`${i.python} no se puede habilitar mientras el proxy inverso está habilitado.`,pythonCannotBeEnabledWithPhp:`${i.python} no se puede habilitar mientras ${i.php} está habilitado.`,enablePython:`${i.enable} ${i.python}`,djangoRules:`Reglas de ${i.django}`,enableDjangoRules:`${i.enable} reglas especificas de ${i.django}`},g={reverseProxyIsDisabled:`${i.reverseProxy} esta desactivado.`,reverseProxyCannotBeEnabledWithPhp:`${i.reverseProxy} no se puede habilitar mientras ${i.php} está habilitado.`,reverseProxyCannotBeEnabledWithPython:`${i.reverseProxy} no se puede habilitar mientras ${i.python} está habilitado.`,enableReverseProxy:`${i.enable} ${i.reverseProxyLower}`},m={fallbackRouting:"Enrutamiento alternativo",fallbackRoutingPhpPath:`Ruta ${i.php} para el enrutamiento alternativo`,legacyPhpRouting:`Enrutamiento ${i.php} antiguo`,enableLegacyRouting:`${i.enable} enrutamiento antiguo`,routing:"Enrutamiento"},b={domain:"Dominio",documentRoot:"Raiz del documento",oneOrMoreOtherDomainsAreAlsoNamed:"Uno o más dominios tienen también ese mismo nombre",thisWillCauseIssuesWithConfigGeneration:"Esto va a causar problemas en la generación de la configuracion.",wwwSubdomain:"subdominio www",cdnSubdomain:"subdominio CDN",redirectSubdomains:"redirección de subdominio",server:"Servidor",listen:"listen"},f={disableForThisDomain:"deshabilitar para este dominio",responseCode:"Codigo de respuesta"},h="Onion",v={onion:h,onionLocation:`Ubicación ${h}`,provideAnOnionLocationToSetOnionLocationHeader:"Proporcione una dirección de ubicación Onion para configurar el encabezado de Onion-Location en su sitio.",letsVisitorsKnownOnionServicesIsAvailable:"Esto les permite a los visitantes saber que una versión de servicios Onion de su sitio está disponible para los navegadores Tor.",learnMoreAboutOnionServices:"Más información sobre los servicios Onion",onionLocationExpectedToEndWithOnion:"Las direcciones de ubicación Onion normalmente terminan con `.onion`."},$={https:l,logging:c,php:d,presets:u,python:p,reverseProxy:g,routing:m,server:b,restrict:f,onion:v},C="Mozilla",y="IPv4",S="IPv6",x={sslProfile:`Perfil ${i.ssl}`,httpsMustBeEnabledOnOneSite:`${i.https} debe estar habilitado en al menos un sitio para modificar globalmente la configuracion ${i.https}.`,portReuse:"Reuseport",enableReuseOfPort:`${i.enable} reuseport para generar un "listening socket" por "worker"`,ocspDnsResolvers:"OCSP DNS Resolvers",cloudflareResolver:"Cloudflare Resolver",googlePublicDns:"Google Public DNS",openDns:"OpenDNS",quad9:"Quad9",verisign:"Verisign",letsEncryptWebroot:`${i.letsEncrypt} webroot`,letsEncryptCertRoot:`directorio del certificado ${i.letsEncrypt}`,mozillaModern:`${C} Moderno`,mozillaIntermediate:`${C} Intermedio`,mozillaOld:`${C} Antiguo`,ipv4Only:`solo ${y}`,ipv6Only:`solo ${S}`,ipv4AndIpv6:`${y} & ${S}`},P={enableFileNotFoundErrorLogging:`${i.enable} el registro de error de archivo no encontrado`,logformat:"log_format",enableCloudflare:"agregar cabecera de petición de Cloudflare en el formato por defecto del registro",cfRay:"CF-Ray",cfConnectingIp:"CF-Connecting-IP",xForwardedFor:"X-Forwarded-For",xForwardedProto:"X-Forwarded-Proto",trueClientIp:"True-Client-IP",cfIpCountry:"CF-IPCountry",cfVisitor:"CF-Visitor",cdnLoop:"CDN-Loop"},D={nginxConfigDirectory:`Directorio de configuración de ${i.nginx}`,mb:"MB"},k={gzipCompression:"Compresión Gzip",enableGzipCompression:`${i.enable} compresión gzip`,brotliCompression:"Compresión Brotli",enableBrotliCompression:`${i.enable} compresión brotli`,brotliIsANonStandardModule:"Brotli no es un modulo estandar de NGINX , verifica el ",brotliGoogleNgxBrotliProject:"Proyecto de Google ngx_brotli",brotliForBuildingNginxWithBrotli:" para saber como construir un NGINX con Brotli!",expirationForAssets:"Expiración para assets",expirationForMedia:"Expiración para media",expirationForSvgs:"Expiración para SVGs",expirationForFonts:"Expiración para fuentes",performance:"Rendimiento"},T={pythonServer:`Servidor ${i.python}`,pythonMustBeEnabledOnOneSite:`${i.python} debe estar habilitado en al menos un sitio para modificar globalmente la configuración ${i.python}.`},R="Cabeceras X-Forwarded-* Legacy",E={reverseProxyMustBeEnabledOnOneSite:`${i.reverseProxy} debe estar habilitado en al menos un sitio para modificar globalmente la configuración ${i.reverseProxyLower}.`,seconds:"segundos",passOn:`${R} transmitido`,remove:`${R} removido`},O={whenUsingWordPressUnsafeEvalIsOftenRequiredToAllowFunctionality:`Cuando usan ${i.wordPress}, <code class="slim">script-src 'self' 'unsafe-inline' 'unsafe-eval';</code> es usualmente requerido en el Content Security Policy para permitir que el panel de administrador funcione correctamente.`,security:"Seguridad"},I={modularizedStructure:"Estructura modularizada",enableModularizedConfigFiles:`${i.enable} archivos de configuración modularizado`,symlinkVhost:"Enlaces simbólicos de vhost",enableSymLinksFrom:`${i.enable} enlaces simbólicos de`,to:"para",shareConfiguration:"Compartir configuración",resetConfiguration:"Reiniciar configuración",resetGlobalConfig:"Reiniciar configuración global",resetAllDomains:"Reiniciar todos los dominios",removeAllDomains:"Quitar todos los dominios",resetAllDomainsConfig:"Reiniciar todas las configuraciones de los dominions",resetDomainConfig:"Reiniciar la configuración del dominio",removeDomain:"Quitar dominio",yesImSure:"Si, Estoy seguro",noCancel:"No, cancelar",tools:"Herramientas",resetGlobalConfigBody:"¿Estás seguro de que desea reiniciar todas las opciones de configuración en la sección de configuración global?",resetAllDomainsConfigBody:"¿Estás seguro de que desea reiniciar la configuración de TODOS los dominios?",removeAllDomainsBody:"¿Estás seguro de que desea quitar TODAS las configuraciones de dominio?",areYouSureYouWantToResetAllConfigurationOptionsForThe:"¿Estás seguro de que desea reiniciar todas las opciones de configuración del",domain:"dominio?",areYouSureYouWantToRemoveThe:"¿Estás seguro de que quieres quitar la ",domainConfiguration:"configuración de dominio?"},N="Docker",w="Dockerfile",A={docker:N,dockerfile:w,dockerCompose:`${N} Compose`,applyDockerTweaks:`Aplicar ajustes de ${N}`,applyDockerTweaksForNginx:`Aplicar ajuste de configuracion para ejecutar ${i.nginx} con ${N}`,applyDockerTweaksExplainer:`Actualizar el usuario de ${i.nginx} a <code class="slim">nginx</code> y el pid a <code class="slim">/var/run/nginx.pid</code>`,includeDockerfile:`Incluir ${w} para ejecutar ${i.nginx} con ${N}`,includeDockerCompose:`Incluir docker-compose para ejecutar ${i.nginx} con docker-compose`},F={https:x,logging:P,nginx:D,performance:k,python:T,reverseProxy:E,security:O,tools:I,docker:A},B="Certbot",L={commentOutSslDirectivesInConfiguration:`Comente las directivas relacionadas con ${i.ssl} en la configuración:`,reloadYourNginxServer:`Recargar el ${i.nginx}:`,obtainSslCertificatesFromLetsEncrypt:`Obtenga los certificados ${i.ssl} de ${i.letsEncrypt} usando ${B}:`,uncommentSslDirectivesInConfiguration:`Comente las directivas relacionadas con ${i.ssl} en la configuración:`,configureCertbotToReloadNginxOnCertificateRenewal:`Configure ${B} para recargar ${i.nginx} cuando renueve los certificados exitosamente:`,certbotDoesNotNeedToBeSetupForYourConfiguration:`${B} no es necesario configurarlo para su configuracion de ${i.nginx}.`,certbot:B},j={downloadTheGeneratedConfig:"<b>Descargar</b> la configuracion generada:",andUploadItToYourServers:"y <b>subirla</b> en",directory:".",or:"o, ",copyBase64StringOfCompressedConfig:"Copiar el texto comprimido en base64 de la configuracion",pasteItInYourServersCommandLineAndExecute:", péguelo en la línea de comando de su servidor y ejecútelo.",navigateToYourNginxConfigurationDirectoryOnYourServer:`Navega en <b>la carpeta de configuracion</b> de ${i.nginx} de tu servidor:`,createABackupOfYourCurrentNginxConfiguration:`Crea un <b>respaldo</b> de tu configuracion actual de ${i.nginx}:`,extractTheNewCompressedConfigurationArchiveUsingTar:"<b>Extraer</b> el nuevo archivo de configuracion comprimido usando tar:",download:"Descargar"},H={letsGoLive:"¡Vamos a desplegar!",reloadNginxToLoadInYourNewConfiguration:`Reiniciar ${i.nginx} para cargar tu nueva configuracion:`,goLive:"A desplegar!"},M={generateDiffieHellmanKeysByRunningThisCommandOnYourServer:"Genera <b> llaves Diffie-Hellman</b> ejecutando este comando en su servidor:",createACommonAcmeChallengeDirectoryForLetsEncrypt:`Crear una simple carpeta <b>ACME-challenge</b> (para <b>${i.letsEncrypt}</b>):`,noAdditionalStepsAreNeededToSetUpSslForNginx:`No se necesitan pasos adicionales para configurar ${i.ssl} en tu configuracion de ${i.nginx}.`,sslInit:`Preparar el ${i.ssl}`},G={certbot:L,download:j,goLive:H,ssl:M},z={lookingForAPlaceToDeploy:"👋 ¿Busca un lugar para desplegar su nueva configuración?",tryOutDigitalOceansDroplet:"Pruebe LEMP Droplet de DigitalOcean con NGINX"},q={wantToContributeChanges:"👋 ¿Quiere solicitar nuevas funciones, contribuir con cambios o traducir la herramienta a un nuevo idioma?",getInvolvedOnGitHub:"Involúcrate en GitHub"},W={droplet:z,contribute:q},Y={app:r,setup:s,footer:t,domainSections:$,globalSections:F,setupSections:G,callouts:W},X={common:i,languages:a["default"],templates:Y}}}]);