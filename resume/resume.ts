(() => {
  "use strict";
  const myName: string = localStorage.getItem("name") || "";

  window.addEventListener("load", () => {
    // Define a type for the fields to be fetched from localStorage
    const fields: Record<string, string> = {
      name: localStorage.getItem("name") || "",
      desig: localStorage.getItem("desig") || "",
      phone: localStorage.getItem("phone") || "",
      email: localStorage.getItem("email") || "",
      add: localStorage.getItem("add") || "",
      pass1: localStorage.getItem("pass1") || "",
      deg1: localStorage.getItem("deg1") || "",
      uni1: localStorage.getItem("uni1") || "",
      pass2: localStorage.getItem("pass2") || "",
      deg2: localStorage.getItem("deg2") || "",
      uni2: localStorage.getItem("uni2") || "",
      skill1: localStorage.getItem("skill1") || "",
      skill2: localStorage.getItem("skill2") || "",
      skill3: localStorage.getItem("skill3") || "",
      lang1: localStorage.getItem("lang1") || "",
      lang2: localStorage.getItem("lang2") || "",
      lang3: localStorage.getItem("lang3") || "",
      styear: localStorage.getItem("styear") || "",
      endyear: localStorage.getItem("endyear") || "",
      company: localStorage.getItem("company") || "",
      comlocation: localStorage.getItem("comlocation") || "",
      jobtitle: localStorage.getItem("jobtitle") || "",
      achv1: localStorage.getItem("achv1") || "",
      achv2: localStorage.getItem("achv2") || "",
      achv3: localStorage.getItem("achv3") || "",
      resImg: localStorage.getItem("profile_pic") || "",
    };

    // Set textContent for text fields and handle the image separately
    for (const [id, value] of Object.entries(fields)) {
      if (id === "resImg") {
        const imgElement = document.getElementById("profileImage") as HTMLImageElement | null;
        if (imgElement && value) {
          imgElement.src = value; // Set the Base64 image as the source
        } else {
          console.warn("Image element with id 'profileImage' not found or no value in localStorage.");
        }
      } else {
        const element = document.getElementById(id) as HTMLElement | null;
        if (element) {
          element.textContent = value;
        } else {
          console.warn(`Element with id '${id}' not found in the DOM.`);
        }
      }
    }

    // Profile Picture Upload
    const picInput = document.getElementById("pic") as HTMLInputElement | null;
    picInput?.addEventListener("change", () => {
      if (picInput.files && picInput.files[0]) {
        const reader = new FileReader();
        reader.addEventListener("load", () => {
          const imageData = reader.result as string;
          localStorage.setItem("profile_pic", imageData);
          const imgElement = document.getElementById("profileImage") as HTMLImageElement | null;
          if (imgElement) imgElement.src = imageData;
        });
        reader.readAsDataURL(picInput.files[0]);
      }
    });

    // Print button functionality
    const printBtn = document.getElementById("print_btn") as HTMLElement | null;
    printBtn?.addEventListener("click", () => {
      window.print();
    });
  });

  const edit_btn = document.getElementById("edit_btn") as HTMLElement | null;
  edit_btn?.addEventListener("click", () => {
    window.history.back();
  });

  const share_btn = document.getElementById("share_btn") as HTMLElement | null;
  const anc = document.getElementById("anc");
  let username;
  if (myName) {
    username = myName.toLowerCase().replace(/\s+/g, "-");
  } else {
    username = "user";
  }

  const baseUrl = "http://127.0.0.1:5500/resume/index.html";
  const uniqueUrl = `${baseUrl}?/${username}`;
  share_btn?.addEventListener("click", () => {
    anc?.setAttribute("href", uniqueUrl);
  });

  const copy_btn = document.getElementById("copy_btn") as HTMLElement | null;

  copy_btn?.addEventListener("click", () => {
    navigator.clipboard.writeText(uniqueUrl).then(() => {
      alert("Copy successful");
    });
  });
})();
