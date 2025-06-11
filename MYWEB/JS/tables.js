window.addEventListener("DOMContentLoaded", () => {
  const base = "https://orange-disco-jj96gpxw645q2qqpq-3000.app.github.dev";

  fetch(`${base}/facilities`).then(r => r.json()).then(data => {
    const tbody = document.querySelector("#facilitiestable tbody");
    data.forEach(item => {
      tbody.innerHTML += `<tr><td>${item.facility_id}</td><td>${item.facility_name}</td><td>${item.location}</td><td>${item.type}</td><td>${item.operational_status}</td></tr>`;
    });
  });

  fetch(`${base}/nuclear_devices`).then(r => r.json()).then(data => {
    const tbody = document.querySelector("#devicestable tbody");
    data.forEach(item => {
      tbody.innerHTML += `<tr><td>${item.device_id}</td><td>${item.device_name}</td><td>${item.facility_id}</td><td>${item.status}</td><td>${item.last_maintenance_date}</td><td>${item.assembled_date}</td></tr>`;
    });
  });

  fetch(`${base}/materials`).then(r => r.json()).then(data => {
    const tbody = document.querySelector("#materialstable tbody");
    data.forEach(item => {
      tbody.innerHTML += `<tr><td>${item.material_id}</td><td>${item.material_name}</td><td>${item.quantity_kg}</td><td>${item.origin_country}</td><td>${item.storage_condition}</td></tr>`;
    });
  });

  fetch(`${base}/components`).then(r => r.json()).then(data => {
    const tbody = document.querySelector("#componentstable tbody");
    data.forEach(item => {
      tbody.innerHTML += `<tr><td>${item.component_id}</td><td>${item.component_type}</td><td>${item.material_id}</td><td>${item.device_id}</td></tr>`;
    });
  });


  fetch(`${base}/personnel`).then(r => r.json()).then(data => {
    const tbody = document.querySelector("#personneltable tbody");
    data.forEach(item => {
      tbody.innerHTML += `<tr><td>${item.personnel_id}</td><td>${item.full_name}</td><td>${item.designation}</td><td>${item.security_clearance_level}</td><td>${item.assigned_facility_id}</td><td>${item.hire_date}</td></tr>`;
    });
  });

  fetch(`${base}/maintenance_logs`).then(r => r.json()).then(data => {
    const tbody = document.querySelector("#maintenancetable tbody");
    data.forEach(item => {
      tbody.innerHTML += `<tr><td>${item.log_id}</td><td>${item.device_id}</td><td>${item.personnel_id}</td><td>${item.maintenance_date}</td><td>${item.action_taken}</td><td>${item.remarks}</td></tr>`;
    });
  });

  fetch(`${base}/audits`).then(r => r.json()).then(data => {
    const tbody = document.querySelector("#auditstable tbody");
    data.forEach(item => {
      tbody.innerHTML += `<tr><td>${item.audit_id}</td><td>${item.facility_id}</td><td>${item.audit_date}</td><td>${item.auditor_name}</td><td>${item.compliance_status}</td><td>${item.remarks}</td></tr>`;
    });
  });

  fetch(`${base}/security_incidents`).then(r => r.json()).then(data => {
    const tbody = document.querySelector("#incidentstable tbody");
    data.forEach(item => {
      tbody.innerHTML += `<tr><td>${item.incident_id}</td><td>${item.facility_id}</td><td>${item.incident_date}</td><td>${item.description}</td><td>${item.reported_by}</td><td>${item.severity_level}</td></tr>`;
    });
  });

  fetch(`${base}/treaty_compliance`).then(r => r.json()).then(data => {
    const tbody = document.querySelector("#treatystable tbody");
    data.forEach(item => {
      tbody.innerHTML += `<tr><td>${item.compliance_id}</td><td>${item.treaty_name}</td><td>${item.facility_id}</td><td>${item.compliance_status}</td><td>${item.last_verified_date}</td><td>${item.notes}</td></tr>`;
    });
  });

  fetch(`${base}/device_movements`).then(r => r.json()).then(data => {
    const tbody = document.querySelector("#movementstable tbody");
    data.forEach(item => {
      tbody.innerHTML += `<tr><td>${item.movement_id}</td><td>${item.device_id}</td><td>${item.from_facility_id}</td><td>${item.to_facility_id}</td><td>${item.move_date}</td><td>${item.authorized_by}</td></tr>`;
    });
  });
});