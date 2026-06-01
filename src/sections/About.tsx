'use client';

export default function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-6xl px-6 py-24"
    >
      <div className="mb-12">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-red-500">
          About Me
        </p>

        <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
          Building modern web experiences with code.
        </h2>
      </div>

      <div className="grid gap-10 md:grid-cols-2">
        <div>
          <p className="mb-5 text-lg leading-8 text-gray-600 dark:text-gray-400">
            Hi, I'm <span className="font-semibold">Abhay Barman</span>, a
            passionate Full Stack Developer and B.Tech student. I enjoy
            building modern, responsive, and user-friendly web applications
            using the latest technologies.
          </p>

          <p className="mb-5 text-lg leading-8 text-gray-600 dark:text-gray-400">
            My primary focus is on React, Next.js, Node.js, MongoDB, and
            TypeScript. I love solving real-world problems and turning ideas
            into functional digital products.
          </p>

          <p className="text-lg leading-8 text-gray-600 dark:text-gray-400">
            Currently, I am working on projects that strengthen my skills in
            full-stack development, system design, and modern web
            technologies.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-2xl border border-gray-200 p-6 dark:border-gray-800">
            <h3 className="mb-2 text-3xl font-bold">10+</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Projects Built
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 p-6 dark:border-gray-800">
            <h3 className="mb-2 text-3xl font-bold">2+</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Years Learning
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 p-6 dark:border-gray-800">
            <h3 className="mb-2 text-3xl font-bold">5+</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Technologies
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 p-6 dark:border-gray-800">
            <h3 className="mb-2 text-3xl font-bold">100%</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Dedication
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}