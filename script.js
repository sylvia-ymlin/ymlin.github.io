const projects = [
    {
        year: "2025",
        title: "LLM Inference Engine",
        tech: "C++ / CUDA",
        description: "A distributed Llama3/Qwen2 inference engine.",
        details: "<ul><li>Implemented Tensor Parallelism and FlashAttention strategies.</li><li>Achieved 1.5-3.5x attention speedup compared to baseline.</li><li>Custom KV Cache management with pre-allocation.</li></ul>",
        link: "https://github.com/sylvia-ymlin/13-LLM-Inference-Engine"
    },
    {
        year: "2025",
        title: "Nano-vLLM",
        tech: "Python / PyTorch",
        description: "Lightweight inference framework built from scratch.",
        details: "<ul><li>Built a vLLM-like engine in ~1,200 lines of Python.</li><li>Comparable throughput to vLLM using prefix caching.</li><li>Supports optional CUDA graph recording.</li></ul>",
        link: "https://github.com/sylvia-ymlin/15-nano-vllm"
    },
    {
        year: "2025",
        title: "Intelligent Book RecSys",
        tech: "RAG / React",
        description: "Production-grade Agentic RAG + RecSys platform.",
        details: "<ul><li>Semantic search using ChromaDB.</li><li>Personalized recommendations via SASRec and XGBoost.</li><li>Real-time LLM streaming response for user queries.</li></ul>",
        link: "https://github.com/sylvia-ymlin/08-book-rec-with-LLMs"
    },
    {
        year: "2024",
        title: "CUDA Kernels Optimization",
        tech: "CUDA / Triton",
        description: "High-performance kernels achieving 83.4% of cuBLAS throughput.",
        details: "<ul><li>Optimized SGEMM with tiling and double buffering.</li><li>Implemented vectorized loads for memory bandwidth saturation.</li><li>Includes custom PyTorch extensions.</li></ul>",
        link: "https://github.com/sylvia-ymlin/07-cuda-kernels-from-scratch"
    },
    {
        year: "2024",
        title: "MiniMind LLM",
        tech: "PyTorch / RLHF",
        description: "End-to-end training of a 26M parameter LLM from scratch.",
        details: "<ul><li>Full pipeline: Pretraining -> SFT -> LoRA -> DPO -> RLAIF.</li><li>Trained on consumer hardware.</li><li>Educational implementation of modern LLM scaling laws.</li></ul>",
        link: "https://github.com/sylvia-ymlin/16-minimind-workthrough"
    },
    {
        year: "2024",
        title: "Distributed MPI Solver",
        tech: "MPI / HPC",
        description: "Scalable conjugate gradient solver for Poisson equations.",
        details: "<ul><li>Domain decomposition for parallel processing.</li><li>Achieved 28.8x speedup on 64 cores.</li><li>Optimized Halo exchange communication.</li></ul>",
        link: "https://github.com/sylvia-ymlin/05-CG-Solver"
    },
    {
        year: "2024",
        title: "Real-time Object Detection",
        tech: "YOLO / ONNX",
        description: "Production-ready video pipeline with object detection.",
        details: "<ul><li>YOLOv8 + DeepSORT integration.</li><li>Optimized with ONNX Runtime for 30ms latency.</li><li>Features a Streamlit-based GUI launcher.</li></ul>",
        link: "https://github.com/sylvia-ymlin/19-Real-time-Object-Detection-Demo"
    },
    {
        year: "2023",
        title: "miniWeather Hybrid Parallel",
        tech: "MPI / OpenACC",
        description: "Scalable solver for compressible Euler equations.",
        details: "<ul><li>Hybrid Parallelism: MPI + OpenMP + OpenACC.</li><li>Runs efficiently on CPU clusters and GPU accelerators.</li><li>Solves 'Memory Wall' issues in atmospheric simulation.</li></ul>",
        link: "https://github.com/sylvia-ymlin/11-miniWeather-hybrid-parallel"
    },
    {
        year: "2023",
        title: "Housing Prices MLOps",
        tech: "ZenML / Cloud Run",
        description: "End-to-end MLOps pipeline.",
        details: "<ul><li>Automated deployment with ZenML and MLflow.</li><li>A/B testing strategies on Google Cloud Run.</li><li>Reproducible experiment tracking.</li></ul>",
        link: "https://github.com/sylvia-ymlin/06-prices-predictor-system"
    },
    {
        year: "2023",
        title: "N-Body Simulation",
        tech: "C11 / AVX2",
        description: "Optimized O(N log N) Barnes-Hut simulation.",
        details: "<ul><li>Custom arena allocators for 478x speedup over malloc.</li><li>Morton code reordering for cache locality.</li><li>Vectorized AVX2 force calculations.</li></ul>",
        link: "https://github.com/sylvia-ymlin/04-nBody-Problem-Simulation"
    },
    // ... Additional projects can be filled similarly
];

// Fallback logic for projects without explicit links in the array above
// I'll ensure all have at least a placeholder if not defined
const defaultGithubRoot = "https://github.com/sylvia-ymlin";

const listContainer = document.getElementById('project-list');
const modal = document.getElementById('project-modal');
const modalTitle = document.getElementById('modal-title');
const modalBody = document.getElementById('modal-body');
const modalGithub = document.getElementById('modal-github');
const closeModal = document.querySelector('.close-modal');

function renderList() {
    listContainer.innerHTML = '';
    projects.sort((a, b) => b.year - a.year);

    projects.forEach((p, index) => {
        const row = document.createElement('a');
        row.href = "#"; // Prevent default navigation
        row.className = 'project-row';
        row.onclick = (e) => {
            e.preventDefault();
            openModal(index);
        };

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

function openModal(index) {
    const p = projects[index];
    modalTitle.textContent = p.title;

    // Construct rich details if not present
    let content = `<p style="margin-bottom: 1rem; color: inherit;">${p.description}</p>`;
    if (p.details) {
        content += p.details;
    }
    content += `<p style="margin-top:1rem; font-size:0.85rem; color:#888;">Tech Stack: ${p.tech}</p>`;

    modalBody.innerHTML = content;

    // Fallback if full URL isn't provided
    const githubUrl = p.link.startsWith('http') ? p.link : `${defaultGithubRoot}/${p.link.replace('../', '')}`;
    modalGithub.href = githubUrl;

    modal.showModal();
}

closeModal.addEventListener('click', () => {
    modal.close();
});

// Close when clicking outside
modal.addEventListener('click', (e) => {
    const rect = modal.getBoundingClientRect();
    const isInDialog = (rect.top <= e.clientY && e.clientY <= rect.top + rect.height
        && rect.left <= e.clientX && e.clientX <= rect.left + rect.width);
    if (!isInDialog) {
        modal.close();
    }
});

document.addEventListener('DOMContentLoaded', renderList);
