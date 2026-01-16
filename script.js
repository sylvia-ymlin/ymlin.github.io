const projects = [
    {
        title: "LLM Inference Engine",
        category: "HPC",
        tech: ["C++17", "CUDA", "NCCL", "Tensor Parallelism"],
        description: "A distributed Llama3/Qwen2 inference engine featuring Tensor Parallelism, FlashAttention, and custom KV Cache management. Achieves 1.5-3.5x attention speedup.",
        link: "../13-LLM-Inference-Engine"
    },
    {
        title: "Nano-vLLM",
        category: "AI",
        tech: ["Python", "PyTorch", "CUDA", "vLLM"],
        description: "Lightweight inference framework built from scratch (~1,200 lines). Comparable throughput to vLLM with prefix caching and CUDA graph support.",
        link: "../15-nano-vllm"
    },
    {
        title: "Intelligent Book RecSys",
        category: "AI",
        tech: ["FastAPI", "React", "RAG", "XGBoost"],
        description: "Production-grade Agentic RAG + RecSys platform. Features semantic search (ChromaDB), personalized recommendations (SASRec), and real-time LLM streaming.",
        link: "../08-book-rec-with-LLMs"
    },
    {
        title: "CUDA Kernels from Scratch",
        category: "HPC",
        tech: ["CUDA C++", "Triton", "PyTorch Extensions"],
        description: "High-performance kernels achieving 83.4% of cuBLAS throughput. Includes SGEMM optimization, double buffering, and vectorized loads.",
        link: "../07-cuda-kernels-from-scratch"
    },
    {
        title: "MiniMind Workthrough",
        category: "AI",
        tech: ["PyTorch", "Transformers", "RLHF", "LoRA"],
        description: "End-to-end training of a 26M parameter LLM from scratch. Covers Pretraining, SFT, DPO, and RLAIF pipelines.",
        link: "../16-minimind-workthrough"
    },
    {
        title: "Distributed MPI Solver",
        category: "HPC",
        tech: ["C11", "MPI", "OpenMP", "HPC"],
        description: "Scalable conjugate gradient solver for Poisson equations. Achieved 28.8x speedup on 64 cores using domain decomposition and halo exchange.",
        link: "../05-CG-Solver"
    },
    {
        title: "Real-time Object Detection",
        category: "App",
        tech: ["YOLOv8", "ONNX", "DeepSORT", "OpenCV"],
        description: "Production-ready video pipeline with object detection, tracking, and instance segmentation. optimized with ONNX Runtime (30ms latency on CPU).",
        link: "../19-Real-time-Object-Detection-Demo"
    },
    {
        title: "miniWeather Hybrid Parallel",
        category: "HPC",
        tech: ["C++", "MPI", "OpenMP", "OpenACC"],
        description: "Scalable solver for compressible Euler equations. Uses Hybrid Parallelism (MPI+OpenMP+OpenACC) to tackle the memory wall on supercomputers.",
        link: "../11-miniWeather-hybrid-parallel"
    },
    {
        title: "Housing Prices MLOps",
        category: "AI",
        tech: ["ZenML", "MLflow", "Cloud Run", "XGBoost"],
        description: "End-to-end MLOps pipeline with automated deployment, experiment tracking, and A/B testing strategies.",
        link: "../06-prices-predictor-system"
    },
    {
        title: "N-Body Simulation",
        category: "HPC",
        tech: ["C11", "OpenMP", "AVX2", "Cache Optimization"],
        description: "Optimized O(N log N) Barnes-Hut simulation. Features custom arena allocator (478x malloc speedup) and Morton code reordering.",
        link: "../04-nBody-Problem-Simulation"
    },
    {
        title: "Scientific ML Portfolio",
        category: "Scientific",
        tech: ["Neural ODEs", "PINNs", "DeepONet", "PyTorch"],
        description: "Collection of 6 projects applying deep learning to physics: PINNs, Hamiltonian NNs, and Operator Learning for PDE solving.",
        link: "../09-sciml-projects"
    },
    {
        title: "Meshless Galerkin-RBF",
        category: "Scientific",
        tech: ["MATLAB", "Python", "PDEs", "Numerical Methods"],
        description: "Master's Thesis: Novel meshless method for solving PDEs on complex geometries. Developed Galerkin-RBF-FD and MFD quadrature techniques.",
        link: "../10-thesis-mfd-rbf"
    },
    {
        title: "Diffusion Prior for BIPs",
        category: "Scientific",
        tech: ["Generative AI", "Diffusers", "Bayesian Inference"],
        description: "Sequential Twisted SMC for unbiased posterior sampling in inverse problems. Improves upon standard diffusion guidance methods.",
        link: "../17-BIPs-diffusion-prior"
    },
    {
        title: "Genetic Oscillators",
        category: "Scientific",
        tech: ["Stochastic Simulation", "Gillespie SSA", "Python"],
        description: "Simulation of Vilar-Kueh-Barkai model for circadian rhythms. Demonstrates noise-induced oscillations in biological circuits.",
        link: "../02-GeneticOscillators"
    },
    {
        title: "Handwritten Digits",
        category: "AI",
        tech: ["SVD", "CNN", "LeNet-5", "NumPy"],
        description: "Comparative study from Linear Algebra (SVD) to Deep Learning (CNN). SVD achieved 94.8% accuracy with zero training cost.",
        link: "../01-HandwrittenDigits"
    },
    {
        title: "Shape Optimization FEM",
        category: "Scientific",
        tech: ["FEniCS", "Adjoint Optimization", "PDEs"],
        description: "PDE-constrained optimization for medical implant design. Uses adaptive mesh refinement and level-set methods.",
        link: "../03-shape-optimization-with-FEM"
    },
    {
        title: "Audio Denoising App",
        category: "App",
        tech: ["PyTorch", "ONNX", "Real-time Audio"],
        description: "Low-latency speech enhancement system inspired by Demucs/DCCRN. Streaming inference support.",
        link: "../12-ANC-denoising"
    },
    {
        title: "LLM From Scratch",
        category: "AI",
        tech: ["PyTorch", "SFT", "RLHF"],
        description: "Implementation of a full LLM training pipeline including custom attention kernels and GRPO alignment.",
        link: "../14-llm-from-scratch"
    }
];

const projectsGrid = document.getElementById('projects-grid');
const filterBtns = document.querySelectorAll('.filter-btn');

function renderProjects(category = 'all') {
    projectsGrid.innerHTML = '';

    // Add a small delay for animation effect
    let delay = 0;

    projects.forEach((project, index) => {
        if (category === 'all' || project.category === category) {
            const card = document.createElement('div');
            card.className = 'project-card';
            card.style.animation = `fadeInUp 0.5s ease forwards ${delay}s`;
            card.style.opacity = '0'; // Start hidden for animation

            const techTags = project.tech.map(t => `<span class="tech-tag">${t}</span>`).join('');

            card.innerHTML = `
                <div class="project-number">#${String(index + 1).padStart(2, '0')}</div>
                <h3 class="project-title">${project.title}</h3>
                <div class="project-tech">${techTags}</div>
                <p class="project-desc">${project.description}</p>
                <div class="card-footer">
                    <a href="${project.link}" class="project-link">View Project <i class="fas fa-arrow-right"></i></a>
                </div>
            `;

            projectsGrid.appendChild(card);
            delay += 0.05;
        }
    });

    // Handle empty state
    if (projectsGrid.children.length === 0) {
        projectsGrid.innerHTML = '<p class="subtitle" style="text-align:center; width:100%;">No projects found in this category.</p>';
    }
}

// Filter Event Listeners
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all
        filterBtns.forEach(b => b.classList.remove('active'));
        // Add active class to clicked
        btn.classList.add('active');

        const filterValue = btn.getAttribute('data-filter');
        renderProjects(filterValue);
    });
});

// Initial Render
document.addEventListener('DOMContentLoaded', () => {
    renderProjects('all');

    // Typing effect for specialized areas
    const subtitle = document.querySelector('.subtitle');
    // Simple glitch effect on hover for the title
    const title = document.querySelector('.glitch');

    title.addEventListener('mouseover', () => {
        title.style.textShadow = '2px 2px var(--accent-primary), -2px -2px var(--accent-secondary)';
    });

    title.addEventListener('mouseout', () => {
        title.style.textShadow = 'none';
    });
});

// Add Keyframes for animation dynamically
const styleSheet = document.createElement("style");
styleSheet.innerText = `
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
`;
document.head.appendChild(styleSheet);
