import React from 'react';
import { Link } from 'react-router-dom';
import ArticleLayout from '@components/Article/ArticleLayout';

export default function HealthyBoundariesPage() {
  const content = `
    <p class="lead text-xl text-muted-foreground mb-6">Learn to protect your energy, honor your needs, and build relationships that support your wellbeing.</p>

    <h2>What Are Boundaries?</h2>
    <p>Boundaries are the limits you set to protect your physical, emotional, mental, and spiritual wellbeing. They define where you end and others begin—what you're comfortable with, what you're not, and what you need to feel safe and respected.</p>
    <p>Healthy boundaries aren't walls that keep people out; they're gates that you control, deciding what comes in and what stays out.</p>

    <h2>Why Boundaries Matter</h2>
    <p>Without healthy boundaries, you feel drained, resentful, or taken advantage of, your needs go unmet while you prioritize others', relationships become one-sided or toxic, stress and burnout increase, self-esteem suffers, and physical and mental health decline.</p>
    <p>With healthy boundaries, you have energy for what matters most, relationships are more authentic and balanced, you feel respected and valued, stress decreases, self-respect grows, and overall wellbeing improves.</p>

    <h2>Types of Boundaries</h2>

    <h3>Physical Boundaries</h3>
    <p>Relate to your body, personal space, and physical needs.</p>
    <p><strong>Examples:</strong> Who can touch you and how, your need for personal space, sleep and rest requirements, physical privacy, and comfort with physical affection.</p>
    <p><strong>Healthy:</strong> "I prefer handshakes to hugs with people I'm not close to."</p>

    <h3>Emotional Boundaries</h3>
    <p>Protect your feelings and emotional energy.</p>
    <p><strong>Examples:</strong> Not taking responsibility for others' emotions, choosing what emotional information to share, not accepting blame for things outside your control, and limiting exposure to others' emotional dumping.</p>
    <p><strong>Healthy:</strong> "I care about your feelings, but I can't fix them for you."</p>

    <h3>Time Boundaries</h3>
    <p>Protect how you spend your limited time and energy.</p>
    <p><strong>Examples:</strong> Saying no to commitments that don't serve you, protecting time for rest and self-care, setting work hours and sticking to them, and limiting time with draining people or activities.</p>
    <p><strong>Healthy:</strong> "I need to leave by 8 PM to get enough rest."</p>

    <h2>How to Set Healthy Boundaries</h2>

    <h3>1. Get Clear on Your Needs and Limits</h3>
    <p>You can't set boundaries if you don't know what they are. Notice when you feel uncomfortable, resentful, or drained. Ask yourself "What do I need right now?" Identify your non-negotiables and recognize your values and priorities.</p>

    <h3>2. Start Small</h3>
    <p>Setting boundaries feels uncomfortable at first, especially if you're not used to it. Begin with lower-stakes situations, people who are generally respectful, one boundary at a time, and clear, simple boundaries.</p>

    <h3>3. Be Clear and Direct</h3>
    <p>Vague boundaries are hard to maintain and easy to cross.</p>
    <p><strong>Instead of:</strong> "Maybe we could possibly think about spending less time together sometimes..."</p>
    <p><strong>Try:</strong> "I need one evening per week to myself to recharge."</p>

    <h3>4. Communicate Boundaries Calmly</h3>
    <p>Your tone and delivery matter as much as your words. Speak calmly and confidently, don't apologize for having needs, state the boundary as a fact not a request for permission, and be respectful but firm.</p>

    <h3>5. Follow Through Consistently</h3>
    <p>A boundary without consequences isn't a boundary—it's a suggestion. If someone crosses your boundary, restate it clearly, enforce the consequence you set, follow through every time, and don't make threats you won't keep.</p>

    <h2>Cultural Considerations</h2>

    <h3>Balancing Individual Needs and Collective Culture</h3>
    <p>In many cultures, including Māori culture, collective wellbeing is prioritized. This doesn't mean sacrificing all personal boundaries—it means finding balance.</p>
    <p><strong>Whanaungatanga</strong> (kinship) includes caring for whānau AND caring for yourself, contributing to collective wellbeing from a full cup, and honoring relationships while honoring your own needs.</p>

    <h3>Manaakitanga and Boundaries</h3>
    <p>Manaakitanga (hospitality and care) extends to yourself. You cannot truly care for others from a place of depletion. Self-care enables sustainable care for others.</p>

    <h2>Your Boundary Journey</h2>
    <p>Setting healthy boundaries is a skill that improves with practice. Start small, be patient with yourself, and remember: you deserve to have your needs met, boundaries are loving not selfish, discomfort is temporary but resentment is long-lasting, healthy people respect boundaries, and you teach people how to treat you.</p>
    <p>Every boundary you set is an act of self-respect and an investment in your wellbeing. You're worth protecting.</p>
  `;

  return (
    <ArticleLayout
      title="Creating Healthy Boundaries: A Guide to Emotional Wellbeing"
      date="2025-09-30"
      readTime="6 min read"
      category="Mental Health"
      image="/img/creating-healthy-boundaries.jpg"
      content={content}
      relatedArticles={[
        { title: "Building Resilience: Mental Health Strategies That Work", slug: "building-resilience" },
        { title: "Understanding Holistic Wellness: A Complete Guide", slug: "holistic-wellness-guide" },
        { title: "5 Simple Breathing Techniques for Daily Stress Relief", slug: "breathing-techniques" }
      ]}
    />
  );
}


