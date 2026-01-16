// Reusing the same data, but rendering diff HTML
const projects = [
    {
        title: "LLM Inference Engine",
        category: "HPC",
        tech: ["C++17", "CUDA", "NCCL"],
        description: "A distributed Llama3/Qwen2 inference engine featuring Tensor Parallelism and FlashAttention. Achieves 1.5-3.5x attention speedup.",
        link: "../13-LLM-Inference-Engine",
        icon: "fa-microchip"
    },
    {
        title: "Nano-vLLM",
        category: "AI",
        tech: ["Python", "PyTorch", "CUDA"],
        description: "Lightweight inference framework built from scratch. Comparable throughput to vLLM with prefix caching.",
        link: "../15-nano-vllm",
        icon: "fa-bolt"
    },
    {
        title: "Intelligent Book RecSys",
        category: "AI",
        tech: ["FastAPI", "React", "RAG"],
        description: "Production-grade Agentic RAG + RecSys platform. Features semantic search and personalized recommendations.",
        link: "../08-book-rec-with-LLMs",
        icon: "fa-book-open"
    },
    {
        title: "CUDA Kernels from Scratch",
        category: "HPC",
        tech: ["CUDA C++", "Triton"],
        description: "High-performance kernels achieving 83.4% of cuBLAS throughput. SGEMM, double buffering, and vectorized loads.",
        link: "../07-cuda-kernels-from-scratch",
        icon: "fa-memory"
    },
    {
        title: "MiniMind Workthrough",
        category: "AI",
        tech: ["PyTorch", "Transformers"],
        description: "End-to-end training of a 26M parameter LLM from scratch. Covers Pretraining, SFT, DPO, and RLAIF pipelines.",
        link: "../16-minimind-workthrough",
        icon: "fa-brain"
    },
    {
        title: "Distributed MPI Solver",
        category: "HPC",
        tech: ["MPI", "OpenMP", "HPC"],
        description: "Scalable conjugate gradient solver for Poisson equations. Achieved 28.8x speedup on 64 cores.",
        link: "../05-CG-Solver",
        icon: "fa-network-wired"
    },
    {
        title: "Real-time Object Detection",
        category: "App",
        tech: ["YOLOv8", "ONNX"],
        description: "Production-ready video pipeline with object detection, tracking, and instance segmentation.",
        link: "../19-Real-time-Object-Detection-Demo",
        icon: "fa-video"
    },
    {
        title: "miniWeather Hybrid Parallel",
        category: "HPC",
        tech: ["MPI", "OpenACC"],
        description: "Scalable solver for compressible Euler equations. Uses Hybrid Parallelism to tackle the memory wall.",
        link: "../11-miniWeather-hybrid-parallel",
        icon: "fa-cloud"
    },
    {
        title: "Housing Prices MLOps",
        category: "AI",
        tech: ["ZenML", "MLflow"],
        description: "End-to-end MLOps pipeline with automated deployment, experiment tracking, and A/B testing.",
        link: "../06-prices-predictor-system",
        icon: "fa-chart-line"
    },
    {
        title: "N-Body Simulation",
        category: "HPC",
        tech: ["OpenMP", "AVX2"],
        description: "Optimized O(N log N) Barnes-Hut simulation using custom arena allocators and Morton codes.",
        link: "../04-nBody-Problem-Simulation",
        icon: "fa-atom"
    },
    {
        title: "Scientific ML Portfolio",
        category: "Scientific",
        tech: ["Neural ODEs", "PINNs"],
        description: "Collection of projects applying deep learning to physics: PINNs, Hamiltonian NNs, and Operator Learning.",
        link: "../09-sciml-projects",
        icon: "fa-flask"
    },
    {
        title: "Meshless Galerkin-RBF",
        category: "Scientific",
        tech: ["MATLAB", "PDEs"],
        description: "Master's Thesis: Novel meshless method for solving PDEs on complex geometries.",
        link: "../10-thesis-mfd-rbf",
        icon: "fa-square-root-variable"
    },
    {
        title: "Diffusion Prior for BIPs",
        category: "Scientific",
        tech: ["Diffusers", "Bayesian"],
        description: "Sequential Twisted SMC for unbiased posterior sampling in inverse problems.",
        link: "../17-BIPs-diffusion-prior",
        icon: "fa-wave-square"
    },
    {
        title: "Genetic Oscillators",
        category: "Scientific",
        tech: ["Stochastic Sim", "Python"],
        description: "Simulation of Vilar-Kueh-Barkai model for circadian rhythms.",
        link: "../02-GeneticOscillators",
        icon: "fa-dna"
    },
    {
        title: "Handwritten Digits",
        category: "AI",
        tech: ["SVD", "CNN"],
        description: "Comparative study from Linear Algebra (SVD) to Deep Learning (CNN).",
        link: "../01-HandwrittenDigits",
        icon: "fa-pen-nib"
    },
    {
        title: "Shape Optimization FEM",
        category: "Scientific",
        tech: ["FEniCS", "Adjoint"],
        description: "PDE-constrained optimization for medical implant design using adaptive mesh refinement.",
        link: "../03-shape-optimization-with-FEM",
        icon: "fa-shapes"
    },
    {
        title: "Audio Denoising App",
        category: "App",
        tech: ["PyTorch", "ONNX"],
        description: "Low-latency speech enhancement system inspired by Demucs/DCCRN.",
        link: "../12-ANC-denoising",
        icon: "fa-microphone-lines"
    },
    {
        title: "LLM From Scratch",
        category: "AI",
        tech: ["SFT", "RLHF"],
        description: "Implementation of a full LLM training pipeline including custom attention kernels and GRPO alignment.",
        link: "../14-llm-from-scratch",
        icon: "fa-robot"
    }
];

const projectsContainer = document.getElementById('projects-grid'); // Renamed ID in HTML
const filterBtns = document.querySelectorAll('.tab-btn');

function renderProjects(category = 'all') {
    projectsContainer.innerHTML = '';

    let delay = 0;

    projects.forEach((project, index) => {
        if (category === 'all' || project.category === category) {
            const item = document.createElement('div');
            item.className = 'project-item';
            // Simple fade in
            item.style.animation = `fadeIn 0.5s ease forwards ${delay}s`;
            item.style.opacity = '0';

            const techTags = project.tech.map(t => `<span class="tag">${t}</span>`).join('');

            // Allow FontAwesome icons or default
            const iconClass = project.icon || 'fa-code';

            item.innerHTML = `
                <div class="project-icon">
                    <i class="fas ${iconClass}"></i>
                </div>
                <div class="project-content">
                    <h3 class="project-title">${project.title}</h3>
                    <p class="project-desc">${project.description}</p>
                    <div class="project-tags">${techTags}</div>
                </div>
                <div class="project-action">
                    <a href="${project.link}" class="btn-sm">Details</a>
                </div>
            `;

            projectsContainer.appendChild(item);
            delay += 0.05;
        }
    });

    if (projectsContainer.children.length === 0) {
        projectsContainer.innerHTML = '<p style="text-align:center; color: var(--text-muted); padding: 2rem;">No projects found.</p>';
    }
}

// Filter Logic
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderProjects(btn.getAttribute('data-filter'));
    });
});

// Mobile Sidebar Toggle
const menuToggle = document.querySelector('.menu-toggle');
const sidebar = document.querySelector('.sidebar');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        sidebar.classList.toggle('open');
    });
}

// Initial Render
document.addEventListener('DOMContentLoaded', () => {
    renderProjects('all');
});

// Animation Keyframes
const styleSheet = document.createElement("style");
styleSheet.innerText = `
@keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
}
`;
document.head.appendChild(styleSheet);
