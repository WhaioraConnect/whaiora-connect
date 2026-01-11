import React from 'react';
import { Link } from 'react-router-dom';
import ArticleLayout from '@components/Article/ArticleLayout';

export default function NutritionMentalHealthPage() {
  const content = `
    <p class="lead text-xl text-muted-foreground mb-6">Discover the powerful connection between what you eat and how you feel, think, and cope with stress.</p>

    <h2>The Gut-Brain Connection</h2>
    <p>Your gut and brain are in constant communication through the gut-brain axis—a complex network involving nerves, hormones, and your immune system. In fact, your gut produces about 95% of your body's serotonin, the neurotransmitter often called the "happiness chemical."</p>
    <p>What you eat directly affects neurotransmitter production, brain inflammation levels, energy and mental clarity, mood stability, stress response, and sleep quality. Think of nutrition as daily medicine for your mind.</p>

    <h2>Essential Nutrients for Mental Health</h2>

    <h3>Omega-3 Fatty Acids</h3>
    <p><strong>Why they matter:</strong> Building blocks of brain cells, reduce inflammation, support neurotransmitter function</p>
    <p><strong>Mental health benefits:</strong> Reduced depression and anxiety symptoms, improved mood stability, better cognitive function, and protection against age-related mental decline.</p>
    <p><strong>Food sources:</strong> Fatty fish (salmon, mackerel, sardines, anchovies), walnuts, flaxseeds and chia seeds, and hemp seeds.</p>

    <h3>B Vitamins (especially B12, B6, and Folate)</h3>
    <p><strong>Why they matter:</strong> Essential for neurotransmitter production and brain cell communication</p>
    <p><strong>Food sources:</strong> B12 (meat, fish, eggs, dairy, fortified cereals), B6 (chicken, fish, potatoes, chickpeas, bananas), and Folate (leafy greens, beans, lentils, asparagus, avocado).</p>

    <h3>Magnesium</h3>
    <p><strong>Why it matters:</strong> Calms nervous system, regulates stress response, supports quality sleep</p>
    <p><strong>Food sources:</strong> Leafy greens (spinach, kale), nuts and seeds (especially pumpkin seeds, almonds), whole grains, beans and lentils, dark chocolate (70%+ cacao), and avocado.</p>

    <h2>Foods That Support Mental Health</h2>

    <h3>Brain-Boosting Foods</h3>
    <p><strong>Fatty Fish:</strong> Rich in omega-3s and vitamin D. Aim for 2-3 servings weekly.</p>
    <p><strong>Leafy Greens:</strong> Packed with folate, magnesium, and antioxidants. Eat daily.</p>
    <p><strong>Berries:</strong> High in antioxidants that protect brain cells. Add to breakfast or snacks.</p>
    <p><strong>Nuts and Seeds:</strong> Provide healthy fats, protein, and minerals. Small daily handful.</p>
    <p><strong>Fermented Foods:</strong> Support gut health and the gut-brain axis. Include yogurt, kefir, sauerkraut, kimchi, miso.</p>
    <p><strong>Whole Grains:</strong> Provide steady energy and B vitamins. Choose oats, quinoa, brown rice, whole wheat.</p>

    <h2>Foods to Limit for Better Mental Health</h2>

    <h3>Highly Processed Foods</h3>
    <p><strong>Why limit:</strong> Low in nutrients, high in additives, contribute to inflammation</p>
    <p><strong>Impact:</strong> Increased depression and anxiety risk, energy crashes, mood swings</p>

    <h3>Refined Sugars and Simple Carbs</h3>
    <p><strong>Why limit:</strong> Cause blood sugar spikes and crashes, feed harmful gut bacteria</p>
    <p><strong>Impact:</strong> Mood swings, energy crashes, increased anxiety, inflammation</p>

    <h3>Excessive Caffeine</h3>
    <p><strong>Why limit:</strong> Can increase anxiety, disrupt sleep, create dependence</p>
    <p><strong>Guideline:</strong> Limit to 1-2 cups of coffee before 2 PM</p>

    <h2>Practical Tips for Better Nutrition</h2>

    <h3>Start Small</h3>
    <p>Don't overhaul everything at once. Choose 1-2 changes to focus on: add one serving of vegetables daily, replace one processed snack with nuts, eat fish once per week, or switch to whole grain bread.</p>

    <h3>Plan and Prep</h3>
    <p>Batch cook on weekends, keep healthy snacks visible and accessible, prep vegetables in advance, and have quick healthy options ready (boiled eggs, cut veggies, nuts).</p>

    <h3>Stay Hydrated</h3>
    <p>Dehydration affects mood and cognitive function. Aim for 8 glasses of water daily.</p>

    <h3>Eat Regularly</h3>
    <p>Skipping meals causes blood sugar crashes, affecting mood and energy. Aim for three balanced meals and 1-2 healthy snacks, with no more than 3-4 hours between eating.</p>

    <h2>Your Plate, Your Mental Health</h2>
    <p>Every meal is an opportunity to nourish not just your body, but your mind and mood. By choosing foods that support brain health, you're taking an active role in your mental wellbeing.</p>
    <p>Start where you are. Make one positive change. Notice how you feel. Build from there. Your brain deserves the best fuel you can give it.</p>
  `;

  return (
    <ArticleLayout
      title="Nutrition for Mental Health: Foods That Support Your Mind"
      date="2025-10-07"
      readTime="7 min read"
      image="/img/nutrition-mental-health.jpg"
      content={content}
      relatedArticles={[
        { title: "Understanding Holistic Wellness: A Complete Guide", slug: "holistic-wellness-guide" },
        { title: "The Connection Between Sleep and Mental Wellbeing", slug: "sleep-mental-health" },
        { title: "Building Resilience: Mental Health Strategies That Work", slug: "building-resilience" }
      ]}
    />
  );
}


