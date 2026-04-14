import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, TrendingUp, Target, Shield } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 leading-tight">
            Diagnóstico Lexis 2.0
            <span className="block text-blue-600 mt-2">Índice de Estructura Digital</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto">
            Ayudamos a abogados y estudios jurídicos a generar consultas calificadas, 
            ordenar su presencia online y crecer con estrategia, no improvisación
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Button size="lg" className="text-lg px-8 py-6 bg-blue-600 hover:bg-blue-700">
              Solicitar Diagnóstico Gratuito
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6">
              Conocer Más
            </Button>
          </div>

          <p className="text-sm text-slate-500 pt-4">
            ⚡ Recibirás tu diagnóstico personalizado por email en 24-48 horas<br/>
            🔒 Sin llamadas de venta • 100% confidencial
          </p>
        </div>
      </section>

      {/* System Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-12">
            Un sistema claro, pensado específicamente para abogados
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 bg-white shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                1️⃣ Punto de llegada claro
              </h3>
              <p className="text-slate-600">
                Creamos una página simple y profesional donde la persona entiende rápidamente 
                si su caso encaja y cómo consultarte.
              </p>
            </Card>

            <Card className="p-6 bg-white shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                2️⃣ Filtro previo a la consulta
              </h3>
              <p className="text-slate-600">
                Antes de WhatsApp o llamada, incorporamos un breve filtro (2 o 3 preguntas) 
                que ordena la consulta y ahorra tiempo.
              </p>
            </Card>

            <Card className="p-6 bg-white shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                3️⃣ Publicidad local bien dirigida
              </h3>
              <p className="text-slate-600">
                La pauta digital se usa solo para mostrarte a personas de tu zona, 
                con mensajes concretos y sin gastar de más.
              </p>
            </Card>
          </div>

          <p className="text-center text-lg text-slate-700 mt-12 font-semibold">
            El resultado no es más tráfico ni más likes.<br/>
            Es <span className="text-blue-600">menos ruido, mejores consultas y un sistema que trabaja mientras vos ejercés</span>.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            👉 El primer paso es ordenar tu situación actual
          </h2>
          <p className="text-xl max-w-3xl mx-auto mb-8 opacity-90">
            Antes de pensar en publicidad o cambios grandes, vemos tu caso concreto. 
            Analizamos cómo estás hoy, qué tipo de consultas te llegan (si llegan) 
            y qué se puede ordenar rápido para mejorar resultados.
          </p>
          <p className="text-lg mb-8">
            No es una llamada de venta. Es un diagnóstico breve y claro para que sepas si esto te conviene o no.
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-10 py-6">
            Acceder al Diagnóstico Gratuito
          </Button>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-12">
            ¿Qué incluye el diagnóstico?
          </h2>

          <div className="space-y-4">
            <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow">
              <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-slate-900 mb-1">Análisis de visibilidad online</h3>
                <p className="text-slate-600">Revisión completa de tu presencia en Google, redes y reseñas</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow">
              <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-slate-900 mb-1">Fortalezas y debilidades en marketing digital</h3>
                <p className="text-slate-600">Identificamos qué funciona y qué está frenando tu crecimiento</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow">
              <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-slate-900 mb-1">Recomendaciones IA para atraer consultas calificadas</h3>
                <p className="text-slate-600">Estrategias personalizadas basadas en datos reales, no genéricas</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow">
              <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-slate-900 mb-1">Plan inicial para crecimiento (+20-30% en leads)</h3>
                <p className="text-slate-600">Pasos concretos y accionables para mejorar tus resultados</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">
            © 2026 Lexis Intelligent. Diagnóstico estratégico para estudios jurídicos.
          </p>
        </div>
      </footer>
    </div>
  );
}
