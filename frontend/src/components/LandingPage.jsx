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
  CheckCircle,
  Menu,
  X,
  ExternalLink,
  Zap,
  Target,
  Users,
  Clock
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
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const iconMap = {
    Heart,
    Flame,
    Shield,
    UserX,
    BarChart3,
    Trophy,
    BookOpen,
    Play,
    Award,
    Zap,
    Target,
    Users,
    Clock
  };

  const handleCtaClick = (link) => {
    window.open(link, '_blank');
  };

  return (
    <div className="min-h-screen bg-primary">
      {/* Navigation Header */}
      <nav className="nav fixed top-0 w-full z-50">
        <div className="container">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-brand-primary rounded-xl flex items-center justify-center">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <span className="heading-sm text-primary font-semibold">ResQMinds</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-secondary hover:text-primary transition-colors">Features</a>
              <a href="#how-it-works" className="text-secondary hover:text-primary transition-colors">How it Works</a>
              <a href="#team" className="text-secondary hover:text-primary transition-colors">Team</a>
              <Button 
                className="btn btn-primary"
                onClick={() => handleCtaClick(heroData.ctaLink)}
              >
                Try Game
                <ExternalLink className="h-4 w-4" />
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden border-t border-light py-4">
              <div className="flex flex-col gap-4">
                <a href="#features" className="text-secondary hover:text-primary transition-colors">Features</a>
                <a href="#how-it-works" className="text-secondary hover:text-primary transition-colors">How it Works</a>
                <a href="#team" className="text-secondary hover:text-primary transition-colors">Team</a>
                <Button 
                  className="btn btn-primary w-full"
                  onClick={() => handleCtaClick(heroData.ctaLink)}
                >
                  Try Game
                  <ExternalLink className="h-4 w-4" />
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero relative">
        <div className="container relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="animate-fade-in">
              <Badge className="mb-6 bg-secondary text-secondary border-medium">
                🚀 Emergency Training Reimagined
              </Badge>
            </div>
            
            <h1 className="display-lg text-primary mb-6 animate-slide-up delay-100">
              {heroData.title}
            </h1>
            
            <p className="body-xl text-secondary mb-8 animate-slide-up delay-200 max-w-3xl mx-auto">
              {heroData.subtitle}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up delay-300">
              <Button 
                size="lg"
                className="btn btn-primary btn-lg"
                onClick={() => handleCtaClick(heroData.ctaLink)}
              >
                {heroData.ctaText}
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Button 
                size="lg"
                className="btn btn-secondary btn-lg"
              >
                Watch Demo
                <Play className="h-5 w-5" />
              </Button>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 animate-slide-up delay-400">
              {whyItMatters.stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="display-md text-brand mb-2">{stat.number}</div>
                  <p className="body-sm text-secondary">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-secondary">
        <div className="container">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-tertiary text-secondary border-medium">
              ⚡ Core Features
            </Badge>
            <h2 className="heading-xl mb-4">Training Scenarios & Platform Features</h2>
            <p className="body-lg text-secondary max-w-2xl mx-auto">
              Practice life-saving skills through interactive scenarios and track your progress with advanced analytics
            </p>
          </div>

          {/* Emergency Scenarios */}
          <div className="mb-16">
            <h3 className="heading-lg mb-8 text-center">Emergency Scenarios</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {gameScenarios.map((scenario) => {
                const IconComponent = iconMap[scenario.icon];
                return (
                  <Card key={scenario.id} className="card hover-lift cursor-pointer group">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-xl bg-brand-primary/10 flex items-center justify-center mb-4 group-hover:bg-brand-primary/20 transition-colors">
                        <IconComponent className="h-6 w-6 text-brand-primary" />
                      </div>
                      <h4 className="heading-sm mb-2">{scenario.title}</h4>
                      <p className="body-sm text-secondary">{scenario.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Platform Features */}
          <div>
            <h3 className="heading-lg mb-8 text-center">Platform Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {platformFeatures.map((feature) => {
                const IconComponent = iconMap[feature.icon];
                return (
                  <Card key={feature.id} className="card hover-lift cursor-pointer group">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-xl bg-brand-primary/10 flex items-center justify-center mb-4 group-hover:bg-brand-primary/20 transition-colors">
                        <IconComponent className="h-6 w-6 text-brand-primary" />
                      </div>
                      <h4 className="heading-sm mb-2">{feature.title}</h4>
                      <p className="body-sm text-secondary">{feature.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Why It Matters Section */}
      <section className="py-24 bg-primary">
        <div className="container">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-secondary text-secondary border-medium">
              📊 Impact
            </Badge>
            <h2 className="heading-xl mb-4">{whyItMatters.title}</h2>
            <p className="body-lg text-secondary max-w-3xl mx-auto">
              {whyItMatters.subtitle}
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {whyItMatters.benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-3 p-4 card-minimal">
                <CheckCircle className="h-5 w-5 text-brand-primary flex-shrink-0" />
                <span className="body-md text-primary">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-24 bg-secondary">
        <div className="container">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-tertiary text-secondary border-medium">
              🔄 Process
            </Badge>
            <h2 className="heading-xl mb-4">{howItWorks.title}</h2>
            <p className="body-lg text-secondary max-w-2xl mx-auto">
              {howItWorks.subtitle}
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {howItWorks.steps.map((step, index) => {
                const IconComponent = iconMap[step.icon];
                
                return (
                  <div key={step.step} className="text-center">
                    <div className="relative mb-6">
                      <div className="w-16 h-16 bg-brand-primary rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-brand-accent rounded-full flex items-center justify-center text-white text-sm font-semibold">
                        {step.step}
                      </div>
                    </div>
                    
                    <Card className="card hover-scale">
                      <CardContent className="p-6">
                        <h3 className="heading-sm mb-3">{step.title}</h3>
                        <p className="body-sm text-secondary">{step.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-24 bg-primary">
        <div className="container">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-secondary text-secondary border-medium">
              👥 Team
            </Badge>
            <h2 className="heading-xl mb-4">Meet Our Team</h2>
            <p className="body-lg text-secondary">
              Passionate developers and researchers dedicated to making emergency training accessible for everyone
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-brand-primary to-brand-accent rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-all duration-200 group-hover:scale-105">
                    <span className="text-2xl font-semibold text-white">{member.avatar}</span>
                  </div>
                </div>
                <h4 className="heading-sm mb-1">{member.name}</h4>
                <p className="body-sm text-secondary">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-secondary">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <Card className="card p-12 shadow-xl">
              <CardContent className="p-0">
                <Badge className="mb-6 bg-tertiary text-secondary border-medium">
                  🎯 Get Started
                </Badge>
                <h2 className="heading-xl mb-4">{finalCta.title}</h2>
                <p className="body-lg text-secondary mb-8">
                  {finalCta.subtitle}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg"
                    className="btn btn-primary btn-lg"
                    onClick={() => handleCtaClick(finalCta.ctaLink)}
                  >
                    {finalCta.ctaText}
                    <ArrowRight className="h-5 w-5" />
                  </Button>
                  <Button 
                    size="lg"
                    className="btn btn-secondary btn-lg"
                  >
                    Learn More
                    <BookOpen className="h-5 w-5" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary border-t border-light py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-brand-primary rounded-lg flex items-center justify-center">
                <Heart className="h-5 w-5 text-white" />
              </div>
              <span className="heading-sm text-brand-primary font-semibold">ResQMinds</span>
            </div>
            
            <div className="flex items-center gap-8">
              <a href="#features" className="text-secondary hover:text-primary transition-colors">Features</a>
              <a href="#how-it-works" className="text-secondary hover:text-primary transition-colors">How it Works</a>
              <a href="#team" className="text-secondary hover:text-primary transition-colors">Team</a>
            </div>
          </div>
          
          <div className="border-t border-light mt-8 pt-8 text-center">
            <p className="body-sm text-secondary mb-2">
              Empowering communities with life-saving skills through gamified learning
            </p>
            <p className="body-xs text-muted">
              © 2024 ResQMinds. Built for Health Hackathon. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;