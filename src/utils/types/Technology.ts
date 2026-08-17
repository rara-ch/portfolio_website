import type { JSX } from "react/jsx-runtime"
import { Icons } from "@/utils/icons"

export interface Technology {
    id: string,
    name: string,
    icon: JSX.Element,
}

// Languages
export const dart: Technology = {
    id: 'dart',
    name: 'Dart',
    icon: Icons.dart,
}

export const golang: Technology = {
    id: 'golang',
    name: 'Go',
    icon: Icons.golang,
}

export const python: Technology = {
    id: 'python',
    name: 'Python',
    icon: Icons.python,
}

export const js: Technology = {
    id: 'js',
    name: 'JavaScript',
    icon: Icons.js,
}

export const ts: Technology = {
    id: 'ts',
    name: 'TypeScript',
    icon: Icons.ts,
}

export const coldfusion: Technology = {
    id: 'coldfusion',
    name: 'Coldfusion',
    icon: Icons.coldfusion,
}

export const mysql: Technology = {
    id: 'mysql',
    name: 'SQL',
    icon: Icons.mysql,
}

export const html: Technology = {
    id: 'html',
    name: 'HTML',
    icon: Icons.html,
}

export const css: Technology = {
    id: 'css',
    name: 'CSS',
    icon: Icons.css,
}

// Frameworks & Libraries
export const flutter: Technology = {
    id: 'flutter',
    name: 'Flutter',
    icon: Icons.flutter,
}

export const react: Technology = {
    id: 'react',
    name: 'React',
    icon: Icons.react,
}

export const next: Technology = {
    id: 'next',
    name: 'Next.js',
    icon: Icons.next,
}

export const three: Technology = {
    id: 'three',
    name: 'THREE.js',
    icon: Icons.three,
}

export const bootstrap: Technology = {
    id: 'bootstrap',
    name: 'Bootstrap',
    icon: Icons.bootstrap,
}

// Developer Tools
export const git: Technology = {
    id: 'git',
    name: 'Git',
    icon: Icons.git,
}

export const github: Technology = {
    id: 'github',
    name: 'GitHub',
    icon: Icons.github,
}

export const vsCode: Technology = {
    id: 'vsCode',
    name: 'VS Code',
    icon: Icons.vsCode,
}

export const postman: Technology = {
    id: 'postman',
    name: 'Postman',
    icon: Icons.postman,
}

export const android: Technology = {
    id: 'android',
    name: 'Android SDK',
    icon: Icons.android,
}

// Databases
export const postgres: Technology = {
    id: 'postgres',
    name: 'Postgres',
    icon: Icons.postgres,
}

export const msSQL: Technology = {
    id: 'msSQL',
    name: 'Microsoft SQL Server',
    icon: Icons.msSQL,
}

// Export all technologies as a single object
export const Technologies = {
    // Languages
    dart,
    golang,
    python,
    js,
    ts,
    coldfusion,
    mysql,
    html,
    css,
    // Frameworks & Libraries
    flutter,
    react,
    next,
    three,
    bootstrap,
    // Developer Tools
    git,
    github,
    vsCode,
    postman,
    android,
    // Databases
    postgres,
    msSQL,
}

