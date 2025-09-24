import React from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { 
  Heart, 
  Flame, 
  Shield, 
  UserX, 
  BarChart3, 
  Trophy, 
  BookOpen, 
  Play, 
  Award,
  ArrowRight,
  CheckCircle
} from 'lucide-react';
import { 
  heroData, 
  gameScenarios, 
  platformFeatures, 
  whyItMatters, 
  howItWorks, 
  teamMembers, 
  finalCta 
} from '../data/mockData';

const LandingPage = () => {
  const iconMap = {
    Heart,
    Flame,
    Shield,
    UserX,
    BarChart3,
    Trophy,
    BookOpen,
    Play,
    Award
  };

  const handleCtaClick = (link) => {
    window.open(link, '_blank');
  };

  return (
    <div className="min-h-screen">
      {/* Navigation Header */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-brand-primary rounded-lg flex items-center justify-center">
                <Heart className="h-5 w-5 text-white" />
              </div>
              <span className="heading-medium text-brand-primary font-semibold">ResQMinds</span>
            </div>
            <Button 
              className="btn-primary"
              onClick={() => handleCtaClick(heroData.ctaLink)}
            >
              Try Game
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="gradient-hero relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-40 right-10 w-48 h-48 bg-white/5 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-white/8 rounded-full blur-lg"></div>
        
        <div className="container mx-auto px-6 pt-40 pb-20">
          <div className="text-center max-w-4xl mx-auto relative z-10">
            <h1 className="display-hero text-white mb-6 animate-slide-up">
              {heroData.title}
            </h1>
            <p className="body-large text-white/90 mb-8 animate-slide-up delay-200 max-w-3xl mx-auto">
              {heroData.subtitle}
            </p>
            <Button 
              size="lg"
              className="btn-primary text-lg px-8 py-4 animate-slide-up delay-400 shadow-lg hover:shadow-xl"
              onClick={() => handleCtaClick(heroData.ctaLink)}
            >
              {heroData.ctaText}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Features Dashboard Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 relative">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-br from-blue-200 to-green-200 rounded-full blur-xl"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full blur-lg"></div>
          <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-gradient-to-br from-yellow-200 to-orange-200 rounded-full blur-xl"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="heading-large mb-4">Training Scenarios & Features</h2>
            <p className="body-large text-gray-600 max-w-2xl mx-auto">
              Practice life-saving skills through interactive scenarios and track your progress with advanced analytics
            </p>
          </div>

          {/* Game Scenarios */}
          <div className="mb-12">
            <h3 className="heading-medium mb-8 text-center">Emergency Scenarios</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {gameScenarios.map((scenario) => {
                const IconComponent = iconMap[scenario.icon];
                return (
                  <Card key={scenario.id} className={`${scenario.color} hover-lift cursor-pointer transition-all duration-200 border-2 shadow-sm hover:shadow-lg backdrop-blur-sm`}>
                    <CardContent className="p-6">
                      <div className={`w-12 h-12 rounded-lg bg-white shadow-sm flex items-center justify-center mb-4`}>
                        <IconComponent className={`h-6 w-6 ${scenario.iconColor}`} />
                      </div>
                      <h4 className="heading-medium mb-2 text-gray-900">{scenario.title}</h4>
                      <p className="body-small text-gray-600">{scenario.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Platform Features */}
          <div>
            <h3 className="heading-medium mb-8 text-center">Platform Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {platformFeatures.map((feature) => {
                const IconComponent = iconMap[feature.icon];
                return (
                  <Card key={feature.id} className={`${feature.color} hover-lift cursor-pointer transition-all duration-200 border-2 shadow-sm hover:shadow-lg backdrop-blur-sm`}>
                    <CardContent className="p-6">
                      <div className={`w-12 h-12 rounded-lg bg-white shadow-sm flex items-center justify-center mb-4`}>
                        <IconComponent className={`h-6 w-6 ${feature.iconColor}`} />
                      </div>
                      <h4 className="heading-medium mb-2 text-gray-900">{feature.title}</h4>
                      <p className="body-small text-gray-600">{feature.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Why This Matters Section */}
      <section className="py-20 bg-gradient-to-br from-green-50/50 via-blue-50/30 to-purple-50/20 relative">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute top-20 right-20 w-40 h-40 bg-gradient-to-br from-green-200/30 to-blue-200/30 rounded-full blur-2xl"></div>
          <div className="absolute bottom-20 left-20 w-32 h-32 bg-gradient-to-br from-purple-200/30 to-pink-200/30 rounded-full blur-xl"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="heading-large mb-4">{whyItMatters.title}</h2>
            <p className="body-large text-gray-600 max-w-3xl mx-auto">
              {whyItMatters.subtitle}
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {whyItMatters.stats.map((stat, index) => (
              <div key={index} className="text-center p-6 bg-white/70 backdrop-blur-sm rounded-2xl shadow-sm hover:shadow-lg transition-all duration-200">
                <div className="text-5xl font-bold text-brand-primary mb-2">{stat.number}</div>
                <p className="body-standard text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Benefits */}
          <div className="max-w-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {whyItMatters.benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3 p-4 bg-white/60 backdrop-blur-sm rounded-xl">
                  <CheckCircle className="h-5 w-5 text-brand-primary flex-shrink-0" />
                  <span className="body-standard text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Timeline */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="heading-large mb-4">{howItWorks.title}</h2>
            <p className="body-large text-gray-600 max-w-2xl mx-auto">
              {howItWorks.subtitle}
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-200 hidden md:block"></div>
              
              {howItWorks.steps.map((step, index) => {
                const IconComponent = iconMap[step.icon];
                const isEven = index % 2 === 0;
                
                return (
                  <div key={step.step} className="relative mb-12 last:mb-0">
                    {/* Timeline Dot */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-brand-primary rounded-full flex items-center justify-center z-10 hidden md:flex">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    
                    {/* Content */}
                    <div className={`md:w-1/2 ${isEven ? 'md:pr-12' : 'md:ml-auto md:pl-12'}`}>
                      <Card className="hover-scale">
                        <CardContent className="p-6">
                          <div className="flex items-center mb-4 md:hidden">
                            <div className="w-10 h-10 bg-brand-primary rounded-full flex items-center justify-center mr-4">
                              <IconComponent className="h-5 w-5 text-white" />
                            </div>
                            <Badge variant="secondary">Step {step.step}</Badge>
                          </div>
                          <div className="hidden md:block mb-4">
                            <Badge variant="secondary">Step {step.step}</Badge>
                          </div>
                          <h3 className="heading-medium mb-3">{step.title}</h3>
                          <p className="body-standard text-gray-600">{step.description}</p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="heading-large mb-4">Meet Our Team</h2>
            <p className="body-large text-gray-600">
              Passionate developers and researchers dedicated to making emergency training accessible for everyone
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-semibold text-white">{member.avatar}</span>
                </div>
                <h4 className="heading-medium mb-1">{member.name}</h4>
                <p className="body-small text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="gradient-cta">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="heading-large mb-4">{finalCta.title}</h2>
            <p className="body-large text-gray-700 mb-8">
              {finalCta.subtitle}
            </p>
            <Button 
              size="lg"
              className="btn-primary text-lg px-8 py-4"
              onClick={() => handleCtaClick(finalCta.ctaLink)}
            >
              {finalCta.ctaText}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-center mb-8">
            <div className="w-8 h-8 bg-brand-primary rounded-lg flex items-center justify-center mr-3">
              <Heart className="h-5 w-5 text-white" />
            </div>
            <span className="heading-medium text-brand-primary font-semibold">ResQMinds</span>
          </div>
          <div className="text-center">
            <p className="body-standard text-gray-400 mb-4">
              Empowering communities with life-saving skills through gamified learning
            </p>
            <p className="body-small text-gray-500">
              © 2024 ResQMinds. Built for Health Hackathon. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;