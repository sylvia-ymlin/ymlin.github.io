const projects = [
    { year: "2025", title: "LLM Inference Engine", tech: "C++ / CUDA", link: "../13-LLM-Inference-Engine" },
    { year: "2025", title: "Nano-vLLM", tech: "Python / PyTorch", link: "../15-nano-vllm" },
    { year: "2025", title: "Intelligent Book RecSys", tech: "RAG / React", link: "../08-book-rec-with-LLMs" },
    { year: "2024", title: "CUDA Kernels Optimization", tech: "CUDA / Triton", link: "../07-cuda-kernels-from-scratch" },
    { year: "2024", title: "MiniMind LLM", tech: "PyTorch / RLHF", link: "../16-minimind-workthrough" },
    { year: "2024", title: "Distributed MPI Solver", tech: "MPI / HPC", link: "../05-CG-Solver" },
    { year: "2024", title: "Real-time Object Detection", tech: "YOLO / ONNX", link: "../19-Real-time-Object-Detection-Demo" },
    { year: "2023", title: "miniWeather Hybrid Parallel", tech: "MPI / OpenACC", link: "../11-miniWeather-hybrid-parallel" },
    { year: "2023", title: "Housing Prices MLOps", tech: "ZenML / Cloud Run", link: "../06-prices-predictor-system" },
    { year: "2023", title: "N-Body Simulation", tech: "C11 / AVX2", link: "../04-nBody-Problem-Simulation" },
    { year: "2023", title: "Scientific ML Portfolio", tech: "Neural ODEs", link: "../09-sciml-projects" },
    { year: "2022", title: "Meshless Galerkin-RBF", tech: "MATLAB", link: "../10-thesis-mfd-rbf" },
    { year: "2022", title: "Diffusion Prior for BIPs", tech: "Diffusers", link: "../17-BIPs-diffusion-prior" },
    { year: "2022", title: "Genetic Oscillators", tech: "Python", link: "../02-GeneticOscillators" },
    { year: "2021", title: "Handwritten Digits", tech: "SVD / CNN", link: "../01-HandwrittenDigits" },
    { year: "2021", title: "Shape Optimization FEM", tech: "FEniCS", link: "../03-shape-optimization-with-FEM" },
    { year: "2021", title: "Audio Denoising App", tech: "PyTorch", link: "../12-ANC-denoising" },
    { year: "2025", title: "LLM From Scratch", tech: "PyTorch", link: "../14-llm-from-scratch" }
];

const listContainer = document.getElementById('project-list');

// Simple List Renderer
function renderList() {
    listContainer.innerHTML = '';

    // Sort by year desc (just in case)
    projects.sort((a, b) => b.year - a.year);

    projects.forEach(p => {
        const row = document.createElement('a');
        row.href = p.link;
        row.className = 'project-row';
        row.innerHTML = `
            <div class="project-year">${p.year}</div>
            <div class="project-info">
                <span class="project-title">${p.title}</span>
            </div>
            <div class="project-tags">${p.tech}</div>
        `;
        listContainer.appendChild(row);
    });
}

document.addEventListener('DOMContentLoaded', renderList);
