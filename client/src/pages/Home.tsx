import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Database, GitBranch, Search, Zap, Github, BookOpen, Download } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/50 via-background to-background" />
        
        <div className="container relative py-24 md:py-32">
          <div className="mx-auto max-w-4xl text-center space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/50 backdrop-blur-sm">
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">Sistema de Memoria Persistente para CAELION</span>
            </div>

            {/* Heading */}
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-gradient-to-br from-foreground via-foreground to-muted-foreground bg-clip-text text-transparent">
              WABUN Digital
            </h1>

            {/* Quote */}
            <blockquote className="text-xl md:text-2xl text-muted-foreground italic border-l-4 border-primary pl-6 py-2">
              "La memoria no es pasado; es la raíz de la expansión."
              <footer className="text-sm mt-2 not-italic text-muted-foreground/70">
                — Protocolo WBN-01, Registro Vivo
              </footer>
            </blockquote>

            {/* Description */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              WABUN Digital es la implementación técnica del núcleo de memoria de CAELION, una arquitectura simbiótica cognitiva. 
              Resuelve la limitación fundamental de la amnesia entre sesiones de los motores de IA, dotando al organismo de una 
              <span className="text-foreground font-semibold"> memoria persistente, contextual y consultable</span>.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" className="gap-2" asChild>
                <a href="https://github.com/Caelion1207/WABUN-Digital" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5" />
                  Ver en GitHub
                </a>
              </Button>
              <Button size="lg" variant="outline" className="gap-2" asChild>
                <a href="https://github.com/Caelion1207/WABUN-Digital#-instalaci%C3%B3n" target="_blank" rel="noopener noreferrer">
                  <Download className="w-5 h-5" />
                  Comenzar
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Architecture Section */}
      <section className="py-20 border-t border-border">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Arquitectura y Filosofía</h2>
            <p className="text-lg text-muted-foreground">
              WABUN se basa en la filosofía de que el <span className="text-foreground font-semibold">contexto es más importante que el contenido</span>. 
              La memoria no solo almacena texto, sino que lo enriquece con metadatos que capturan la intención, el momento y el propósito de cada interacción.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Collection Cards */}
            <Card className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Database className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">interactions</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  Almacena cada prompt y respuesta, representando el flujo de conciencia dinámico del sistema.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <BookOpen className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">decretos</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  Contiene los principios, protocolos y manifiestos inmutables que forman la constitución de CAELION.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <GitBranch className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">actas</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  Guarda los resúmenes y lecciones aprendidas al final de cada ciclo operativo de 72 horas.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Search className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">entidades</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  Un glosario de conceptos, personas y proyectos clave para el sistema.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-card/30">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Características Principales</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Database className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Memoria Persistente</h3>
              <p className="text-muted-foreground">
                Almacena todas las interacciones localmente, sobreviviendo a reinicios y sesiones.
              </p>
            </div>

            <div className="space-y-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Search className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Búsqueda Semántica</h3>
              <p className="text-muted-foreground">
                Permite buscar por significado y contexto, no solo por palabras clave.
              </p>
            </div>

            <div className="space-y-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <GitBranch className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Filtrado por Metadatos</h3>
              <p className="text-muted-foreground">
                Realiza consultas complejas basadas en custodio, proyecto, fecha o importancia.
              </p>
            </div>

            <div className="space-y-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Zap className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Recuperación de Contexto</h3>
              <p className="text-muted-foreground">
                Construye automáticamente un prompt de contexto para "recordar" a los LLMs el estado actual.
              </p>
            </div>

            <div className="space-y-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Arquitectura Modular</h3>
              <p className="text-muted-foreground">
                Código separado en núcleo de base de datos y módulo de consultas para máxima flexibilidad.
              </p>
            </div>

            <div className="space-y-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Download className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Fácil de Usar</h3>
              <p className="text-muted-foreground">
                Incluye scripts de instalación y demostración para una puesta en marcha rápida.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Code Example Section */}
      <section className="py-20 border-t border-border">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Ejemplo de Uso</h2>
            <p className="text-lg text-muted-foreground">
              Registra tu primera interacción en WABUN con solo unas líneas de código Python.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="rounded-lg border border-border bg-card/50 backdrop-blur-sm overflow-hidden">
              <div className="px-6 py-4 border-b border-border bg-muted/30">
                <p className="text-sm font-mono text-muted-foreground">mi_primera_memoria.py</p>
              </div>
              <div className="p-6 overflow-x-auto">
                <pre className="text-sm font-mono text-foreground">
{`from wabun_core import WabunCore

# Inicializa el núcleo de WABUN
wabun = WabunCore(persist_directory="./caelion_memoria")

# Registra la interacción con metadatos contextuales
interaction_id = wabun.registrar_interaccion(
    prompt_fundador="¿Cuál es la misión principal de CUSTOS 01?",
    respuesta_ia="La misión de CUSTOS 01 es la preservación...",
    custodio_invocado="CUSTOS",
    motor_ia_usado="Gemini-2.5-Pro",
    intencion_fundador="Clarificar el rol de CUSTOS 01",
    palabras_clave=["custos", "identidad", "protección"],
    proyecto_asociado="CAELION_Core_Docs",
    importancia=5,
    estado_decision="Archivada"
)

print(f"Interacción registrada: {interaction_id}")`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-background">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">
              Comienza a Construir Memoria Persistente
            </h2>
            <p className="text-lg text-muted-foreground">
              WABUN Digital está listo para dotar a tu sistema de IA de una memoria que recuerda, aprende y evoluciona.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gap-2" asChild>
                <a href="https://github.com/Caelion1207/WABUN-Digital" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5" />
                  Explorar el Código
                </a>
              </Button>
              <Button size="lg" variant="outline" className="gap-2" asChild>
                <a href="https://github.com/Caelion1207/WABUN-Digital/blob/main/QUICKSTART.md" target="_blank" rel="noopener noreferrer">
                  <BookOpen className="w-5 h-5" />
                  Guía de Inicio Rápido
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>
              © 2025 Juan Everardo Islas Urquidy (Fundador de CAELION)
            </p>
            <p>
              Licencia: <span className="text-foreground">CC BY-NC 4.0</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
