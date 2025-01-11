"use static";
import React from "react";

const Page = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-3xl font-bold text-center">Agent Reviews</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-4xl font-semibold mb-6">Replit Agent Review</h2>
          <div className="text-gray-700 leading-relaxed space-y-6">
            <p className="text-lg">
              Have you ever wanted to make an app or a website without any
              coding knowledge? If you have, like I did before finally learning
              how to do it myself, the experience could not be worse. Working
              through a laggy UI like Wix or other no-code editors with limited
              functionality is just not worth it, especially if you want to
              create something production-ready. Don&apos;t worry, though. I
              have a solution for you. Ladies and gentlemen. Boys and girls. Let
              me present to you your next “Chat GPT moment”: Replit Agent. This
              tool inputs your ideas and outputs them as fully functioning web
              applications. Don&apos;t believe me? Let me show you. I have
              always wanted my own personal website, so why not make one right
              now? I wrote the following prompt and asked Replit Agent to build
              the website for me.
            </p>
            <img
              className="max-w-full h-auto mx-auto rounded-lg"
              src="/replit_text_prompt.png"
              alt="replit_prompt"
            />
            <img
              className="max-w-full h-auto mx-auto rounded-lg mt-6"
              src="/replit_working.png"
              alt="replit_working"
            />
            <p className="text-lg mt-4">
              After tinkering for a couple of minutes, Replit Agent outputs a
              super clean personal website. Almost like I wanted it:
            </p>
            <img
              className="max-w-full h-auto mx-auto rounded-lg mt-4"
              src="/replit_prototype.png"
              alt="replit_prototype"
            />
            <p className="text-lg">
              The only problem is that the profile picture is not mine. I asked
              the assistant to address the problem.
            </p>
          </div>
          <img
            className="max-w-full h-auto mx-auto rounded-lg mt-6"
            src="/replit_fix.png"
            alt="replit_fix"
          />
          <p className="text-lg mt-6">
            And two seconds later, my very own personal website was ready:
          </p>
          <img
            className="max-w-full h-auto mx-auto rounded-lg mt-4"
            src="/replit_final.png"
            alt="replit_final"
          />
          <p className="text-lg mt-6">
            After fixing the styles and things I did not like with the initial
            prototype, I ended up with a clean, professional website. The only
            task that remains now is to deploy it so that it becomes accessible
            to the public. This is usually a tedious task, especially for
            no-coders, but luckily, all I have to do is click the “Deploy”
            button in the top right corner. And within a couple of seconds, my
            website got published online. You can check it out here:
            https://replit.com/@lah2234/LeonardHolterPortfolio-2
          </p>
          <p className="text-lg mt-6">
            So this proves my point. We have gotten to an age where you can hire
            AI Agents to code full-blown web applications and websites for you.
            Check the Agent out here: https://replit.com/~ Keep in mind that
            this agent is not perfect. Because it&apos;s powered by an LLM, it
            executes well-documented tasks on the internet. So, it will most
            likely struggle if you want it to incorporate an unknown API. Also,
            it tends to favour certain tech stacks like React front-end and a
            backend with Flask, which might not be optimal for all use cases. I
            have also noticed the agent messing up some code and being confident
            it got it right. The best way to avoid this is to engineer your
            prompts thoroughly and keep on prompting until it fixes the
            problems/bugs.
          </p>
          <p className="text-lg mt-6">
            But hey, the technology / Agent is super impressive. The last time I
            got this excited for the future was when I first tried chat gpt. So
            make sure you give the agent a good try and remember that it will
            only become more and more impressive by each day!
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2025 MOA. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Page;
