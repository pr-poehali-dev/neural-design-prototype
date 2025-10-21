import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { useState } from "react";

export default function Index() {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const projects = [
    {
      title: "Гостиная Lux",
      category: "Жилой интерьер",
      image: "https://cdn.poehali.dev/projects/43a031d5-67da-4b77-8899-f2fbef903a77/files/f4bc59d4-3148-41ae-b799-737fbd241593.jpg",
      area: "45 м²",
      time: "2 дня"
    },
    {
      title: "Спальня Organic",
      category: "Частный дом",
      image: "https://cdn.poehali.dev/projects/43a031d5-67da-4b77-8899-f2fbef903a77/files/53af99b4-4753-4d6d-b703-45fe49949962.jpg",
      area: "28 м²",
      time: "1 день"
    },
    {
      title: "Кухня Modern",
      category: "Квартира",
      image: "https://cdn.poehali.dev/projects/43a031d5-67da-4b77-8899-f2fbef903a77/files/9b3e5259-5ae8-4291-b1c2-a45cac6225af.jpg",
      area: "32 м²",
      time: "1 день"
    }
  ];

  const steps = [
    {
      icon: "MessageSquare",
      title: "Консультация",
      description: "Обсуждаем ваши пожелания и загружаем параметры в ИИ"
    },
    {
      icon: "Brain",
      title: "ИИ-Визуализация",
      description: "Нейросеть создаёт 5-10 концепций за 30 минут"
    },
    {
      icon: "Palette",
      title: "Детализация",
      description: "Дизайнер дорабатывает выбранную концепцию"
    },
    {
      icon: "FileCheck",
      title: "Реализация",
      description: "Полный пакет документов и сопровождение"
    }
  ];

  const features = [
    {
      icon: "Zap",
      title: "Скорость × 10",
      description: "ИИ создаёт визуализации за часы, а не недели"
    },
    {
      icon: "Sparkles",
      title: "Безлимитные варианты",
      description: "Генерируем десятки концепций до идеального результата"
    },
    {
      icon: "Target",
      title: "Точность",
      description: "Учитываем все ваши пожелания в алгоритме"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-accent to-primary rounded-lg" />
            <span className="font-serif text-2xl font-bold">AI Interior</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#portfolio" className="text-sm hover:text-accent transition-colors">Портфолио</a>
            <a href="#ai" className="text-sm hover:text-accent transition-colors">ИИ-Визуализация</a>
            <a href="#approach" className="text-sm hover:text-accent transition-colors">Подход</a>
            <a href="#steps" className="text-sm hover:text-accent transition-colors">Этапы</a>
            <a href="#services" className="text-sm hover:text-accent transition-colors">Услуги</a>
            <a href="#about" className="text-sm hover:text-accent transition-colors">О нас</a>
          </div>
          <Button className="bg-accent hover:bg-accent/90 text-foreground">
            Консультация
          </Button>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <Badge className="bg-accent/20 text-accent border-accent/30">
                Искусственный интеллект × Дизайн
              </Badge>
              <h1 className="font-serif text-6xl md:text-7xl font-bold leading-tight">
                Интерьер мечты <br />
                <span className="text-primary">за 48 часов</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg">
                Используем нейронные сети для мгновенного создания визуальных концепций. 
                Покажем 10+ вариантов, пока другие делают один эскиз.
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-foreground">
                  Получить визуализацию
                  <Icon name="ArrowRight" size={20} className="ml-2" />
                </Button>
                <Button size="lg" variant="outline">
                  Смотреть портфолио
                </Button>
              </div>
              <div className="flex gap-8 pt-4">
                <div>
                  <div className="font-serif text-3xl font-bold text-accent">500+</div>
                  <div className="text-sm text-muted-foreground">Проектов</div>
                </div>
                <div>
                  <div className="font-serif text-3xl font-bold text-accent">48ч</div>
                  <div className="text-sm text-muted-foreground">Визуализация</div>
                </div>
                <div>
                  <div className="font-serif text-3xl font-bold text-accent">98%</div>
                  <div className="text-sm text-muted-foreground">Довольных клиентов</div>
                </div>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20 rounded-3xl blur-3xl" />
              <img 
                src={projects[0].image}
                alt="AI Interior Design"
                className="relative rounded-3xl shadow-2xl w-full h-[600px] object-cover"
              />
              <Card className="absolute bottom-8 left-8 right-8 bg-card/90 backdrop-blur-md border-accent/20">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Icon name="Brain" size={24} className="text-accent" />
                    <span className="font-serif text-xl font-semibold">ИИ-Визуализация</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Созданo нейросетью за 15 минут • Доработано дизайнером за 2 часа
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="ai" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16 space-y-4">
            <Badge className="bg-accent/20 text-accent border-accent/30">
              Технология будущего
            </Badge>
            <h2 className="font-serif text-5xl font-bold">
              Почему мы используем ИИ?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Искусственный интеллект усиливает креативность наших дизайнеров и позволяет 
              создавать визуализации в 10 раз быстрее традиционных методов
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index}
                className="border-accent/20 hover:border-accent/40 transition-all hover:shadow-lg hover:scale-105 duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8 text-center space-y-4">
                  <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto">
                    <Icon name={feature.icon} size={32} className="text-accent" />
                  </div>
                  <h3 className="font-serif text-2xl font-semibold">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16 space-y-4">
            <Badge className="bg-accent/20 text-accent border-accent/30">
              Наши работы
            </Badge>
            <h2 className="font-serif text-5xl font-bold">
              Портфолио проектов
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Каждый проект создан с использованием ИИ-технологий и доработан профессиональными дизайнерами
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index}
                className="group overflow-hidden border-accent/20 hover:border-accent/40 transition-all hover:shadow-xl duration-300"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-accent text-foreground">
                      <Icon name="Sparkles" size={14} className="mr-1" />
                      AI
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6 space-y-4">
                  <div>
                    <h3 className="font-serif text-2xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-sm text-muted-foreground">{project.category}</p>
                  </div>
                  <div className="flex justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <Icon name="Maximize2" size={16} className="text-accent" />
                      <span>{project.area}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Clock" size={16} className="text-accent" />
                      <span>{project.time}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="approach" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-accent/20 text-accent border-accent/30">
                Наш подход
              </Badge>
              <h2 className="font-serif text-5xl font-bold">
                ИИ + Человек = <br />
                <span className="text-primary">Идеальный результат</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Мы не заменяем дизайнеров на роботов. Мы даём им инструменты будущего.
              </p>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="Brain" size={24} className="text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Нейросеть генерирует</h4>
                    <p className="text-sm text-muted-foreground">
                      Создаёт множество вариантов планировки, цветовых схем и расстановки мебели
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="User" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Дизайнер дорабатывает</h4>
                    <p className="text-sm text-muted-foreground">
                      Добавляет душу, учитывает нюансы и создаёт уникальную атмосферу
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="Heart" size={24} className="text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Вы получаете идеал</h4>
                    <p className="text-sm text-muted-foreground">
                      Скорость технологий + вкус профессионала = интерьер мечты
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <Card className="p-6 text-center border-accent/20">
                  <div className="font-serif text-4xl font-bold text-accent mb-2">10x</div>
                  <div className="text-sm text-muted-foreground">Быстрее визуализация</div>
                </Card>
                <Card className="p-6 text-center border-primary/20">
                  <div className="font-serif text-4xl font-bold text-primary mb-2">5-10</div>
                  <div className="text-sm text-muted-foreground">Вариантов концепций</div>
                </Card>
                <Card className="p-6 text-center border-primary/20">
                  <div className="font-serif text-4xl font-bold text-primary mb-2">100%</div>
                  <div className="text-sm text-muted-foreground">Ручная доработка</div>
                </Card>
                <Card className="p-6 text-center border-accent/20">
                  <div className="font-serif text-4xl font-bold text-accent mb-2">48ч</div>
                  <div className="text-sm text-muted-foreground">Первая концепция</div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="steps" className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16 space-y-4">
            <Badge className="bg-accent/20 text-accent border-accent/30">
              Процесс работы
            </Badge>
            <h2 className="font-serif text-5xl font-bold">
              Этапы создания интерьера
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              От первой встречи до финального результата — прозрачный процесс с использованием ИИ
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <Card 
                key={index}
                className={`cursor-pointer transition-all duration-300 ${
                  activeStep === index 
                    ? 'border-accent shadow-lg scale-105' 
                    : 'border-accent/20 hover:border-accent/40'
                }`}
                onClick={() => setActiveStep(activeStep === index ? null : index)}
              >
                <CardContent className="p-6 text-center space-y-4">
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-accent/20 to-primary/20 rounded-2xl flex items-center justify-center mx-auto">
                      <Icon name={step.icon} size={32} className="text-accent" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent text-foreground rounded-full flex items-center justify-center font-bold text-sm">
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="font-serif text-xl font-semibold">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16 space-y-4">
            <Badge className="bg-accent/20 text-accent border-accent/30">
              Услуги
            </Badge>
            <h2 className="font-serif text-5xl font-bold">
              Что мы предлагаем
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "Sparkles",
                title: "ИИ-Визуализация",
                price: "от 15 000 ₽",
                features: ["5-10 концепций", "48 часов", "Без детализации"]
              },
              {
                icon: "Palette",
                title: "Дизайн-проект",
                price: "от 2 500 ₽/м²",
                features: ["ИИ + ручная работа", "Полная детализация", "Чертежи и развёртки"]
              },
              {
                icon: "Home",
                title: "Под ключ",
                price: "от 35 000 ₽/м²",
                features: ["От концепции до ремонта", "Авторский надзор", "Гарантия качества"]
              }
            ].map((service, index) => (
              <Card key={index} className="border-accent/20 hover:border-accent/40 transition-all hover:shadow-lg">
                <CardContent className="p-8 space-y-6">
                  <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center">
                    <Icon name={service.icon} size={28} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl font-semibold mb-2">{service.title}</h3>
                    <div className="font-serif text-3xl font-bold text-accent">{service.price}</div>
                  </div>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm">
                        <Icon name="Check" size={16} className="text-accent" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-accent hover:bg-accent/90 text-foreground">
                    Заказать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-accent/20 text-accent border-accent/30">
                О студии
              </Badge>
              <h2 className="font-serif text-5xl font-bold">
                Первая ИИ-студия <br />
                в России
              </h2>
              <p className="text-lg text-muted-foreground">
                Мы начали использовать нейронные сети в дизайне интерьеров в 2023 году, 
                когда другие только говорили о возможностях. Сегодня наша технология 
                позволяет создавать визуализации в 10 раз быстрее.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="font-serif text-2xl font-bold text-accent">15+</div>
                  <div className="text-sm text-muted-foreground">Дизайнеров в команде</div>
                </div>
                <div className="space-y-2">
                  <div className="font-serif text-2xl font-bold text-accent">2023</div>
                  <div className="text-sm text-muted-foreground">Год основания</div>
                </div>
                <div className="space-y-2">
                  <div className="font-serif text-2xl font-bold text-accent">500+</div>
                  <div className="text-sm text-muted-foreground">Реализованных проектов</div>
                </div>
                <div className="space-y-2">
                  <div className="font-serif text-2xl font-bold text-accent">24/7</div>
                  <div className="text-sm text-muted-foreground">Работа нейросети</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center">
                <Icon name="Brain" size={120} className="text-accent/40" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-gradient-to-br from-accent/10 to-primary/10">
        <div className="container mx-auto max-w-4xl text-center space-y-8">
          <h2 className="font-serif text-5xl font-bold">
            Готовы увидеть ваш интерьер?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Оставьте заявку, и мы создадим первую ИИ-визуализацию вашего пространства бесплатно
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <input 
              type="text" 
              placeholder="Ваше имя" 
              className="px-6 py-4 rounded-xl border border-accent/30 bg-background w-full sm:w-64 focus:outline-none focus:border-accent"
            />
            <input 
              type="tel" 
              placeholder="+7 (___) ___-__-__" 
              className="px-6 py-4 rounded-xl border border-accent/30 bg-background w-full sm:w-64 focus:outline-none focus:border-accent"
            />
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-foreground w-full sm:w-auto">
              Получить визуализацию
              <Icon name="Send" size={20} className="ml-2" />
            </Button>
          </div>
          <p className="text-xs text-muted-foreground">
            Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
          </p>
        </div>
      </section>

      <footer className="py-12 px-4 border-t border-border">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-br from-accent to-primary rounded-lg" />
                <span className="font-serif text-xl font-bold">AI Interior</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Студия дизайна интерьеров с использованием ИИ-технологий
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Навигация</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#portfolio" className="hover:text-accent transition-colors">Портфолио</a></li>
                <li><a href="#services" className="hover:text-accent transition-colors">Услуги</a></li>
                <li><a href="#about" className="hover:text-accent transition-colors">О нас</a></li>
                <li><a href="#contact" className="hover:text-accent transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>ИИ-Визуализация</li>
                <li>Дизайн-проект</li>
                <li>Ремонт под ключ</li>
                <li>Авторский надзор</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>+7 (495) 123-45-67</li>
                <li>info@ai-interior.ru</li>
                <li>Москва, ул. Примерная, 1</li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
            © 2024 AI Interior. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
}
