import React from 'react';
import { Link } from 'react-router-dom';
import ArticleLayout from '@components/Article/ArticleLayout';

export default function SleepMentalHealthPage() {
  const content = `
    <p class="lead text-xl text-muted-foreground mb-6">Discover why quality sleep is essential for mental health and how to improve your sleep naturally.</p>

    <h2>The Sleep-Mental Health Connection</h2>
    <p>Sleep and mental health have a bidirectional relationship: poor sleep contributes to mental health problems, and mental health problems disrupt sleep. Understanding this connection is crucial for holistic wellbeing.</p>
    <p>When you sleep well, your brain processes emotions effectively, consolidates memories, clears toxins that accumulate during waking hours, regulates mood-balancing neurotransmitters, and restores energy for the next day.</p>

    <h2>How Sleep Affects Mental Health</h2>

    <h3>Emotional Regulation</h3>
    <p>During REM sleep, your brain processes emotional experiences from the day. Without adequate REM sleep, you're more reactive, have difficulty managing emotions, and find it harder to put challenges in perspective.</p>

    <h3>Stress Response</h3>
    <p>Sleep deprivation increases cortisol (stress hormone) levels and makes you more sensitive to stressors. What might be a minor annoyance when well-rested becomes overwhelming when sleep-deprived.</p>

    <h3>Cognitive Function</h3>
    <p>Poor sleep impairs decision-making ability, concentration and focus, memory formation and recall, problem-solving skills, and creativity. These cognitive impairments make it harder to cope with life's challenges.</p>

    <h2>Creating Your Sleep Sanctuary</h2>

    <h3>Optimize Your Environment</h3>
    <p><strong>Temperature:</strong> Keep your bedroom cool (15-19°C/60-67°F)</p>
    <p><strong>Darkness:</strong> Use blackout curtains or an eye mask</p>
    <p><strong>Quiet:</strong> Use earplugs, white noise, or a fan to mask disruptive sounds</p>
    <p><strong>Comfort:</strong> Invest in a supportive mattress and pillows</p>
    <p><strong>Cleanliness:</strong> Keep your sleep space clean and clutter-free</p>

    <h3>Light Management</h3>
    <p><strong>Morning:</strong> Get bright light exposure within 30 minutes of waking (ideally outdoors)</p>
    <p><strong>Daytime:</strong> Spend time in natural daylight</p>
    <p><strong>Evening:</strong> Dim lights 2-3 hours before bed</p>
    <p><strong>Night:</strong> Use amber/red lights if needed; avoid blue light from screens</p>

    <h2>Sleep-Promoting Habits</h2>

    <h3>Consistent Schedule</h3>
    <p>Go to bed and wake up at the same time every day—yes, even weekends. Consistency reinforces your circadian rhythm.</p>

    <h3>Wind-Down Routine</h3>
    <p>Create a 30-60 minute calming routine before bed. Effective activities include gentle stretching or yoga, reading physical books, journaling, breathing exercises, meditation or prayer, warm bath or shower, and listening to calm music or nature sounds.</p>

    <h3>Movement and Activity</h3>
    <p>Regular exercise improves sleep, but timing matters. Morning/afternoon exercise improves sleep quality, while intense exercise within 3 hours of bed may disrupt sleep. Gentle stretching before bed can promote relaxation.</p>

    <h3>Nutrition for Better Sleep</h3>
    <p><strong>Foods that promote sleep:</strong> Tryptophan-rich foods (turkey, eggs, cheese, nuts, seeds), complex carbohydrates (whole grains, sweet potato), magnesium-rich foods (leafy greens, nuts, seeds, bananas), and herbal teas (chamomile, valerian, passionflower).</p>
    <p><strong>Foods/drinks to limit:</strong> Caffeine after 2 PM, alcohol (disrupts sleep architecture), heavy, spicy, or acidic foods close to bedtime, and large amounts of liquid before bed.</p>

    <h2>What To Do When You Can't Sleep</h2>

    <h3>The 20-Minute Rule</h3>
    <p>If you're awake for more than 20 minutes, get out of bed, go to another room (keep lights dim), do something calm and non-stimulating, and return to bed when you feel sleepy.</p>

    <h3>Reframe Your Thoughts</h3>
    <p>Instead of "I can't sleep, tomorrow will be terrible," try "I'm resting even if I'm not sleeping. My body is getting some restoration." Anxiety about not sleeping often makes insomnia worse.</p>

    <h2>When to Seek Professional Help</h2>
    <p>Consult a healthcare provider if you experience chronic insomnia (difficulty sleeping 3+ nights/week for 3+ months), snoring with pauses in breathing (possible sleep apnea), excessive daytime sleepiness despite adequate sleep, or sleep problems significantly impacting daily functioning.</p>

    <h2>Your Sleep, Your Foundation</h2>
    <p>Quality sleep isn't a luxury—it's a foundational pillar of mental health. Every improvement you make in sleep quality supports your emotional resilience, cognitive function, and overall wellbeing.</p>
    <p>Start with one or two changes from this guide. Small, consistent improvements compound over time into transformative sleep—and transformative mental health.</p>
  `;

  return (
    <ArticleLayout
      title="The Connection Between Sleep and Mental Wellbeing"
      date="2025-10-14"
      readTime="6 min read"
      image="/img/sleep-mental-health.jpg"
      content={content}
      relatedArticles={[
        { title: "5 Simple Breathing Techniques for Daily Stress Relief", slug: "breathing-techniques" },
        { title: "Understanding Holistic Wellness: A Complete Guide", slug: "holistic-wellness-guide" },
        { title: "Nutrition for Mental Health: Foods That Support Your Mind", slug: "nutrition-mental-health" }
      ]}
    />
  );
}



