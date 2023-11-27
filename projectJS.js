function generateMealPlan() {
    var email = document.getElementById("email").value;
    if (!isValidEmail(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    var name = document.getElementById("name").value;
    var goal = document.getElementById("goal").value;
    var mealsM = {
        breakfast: document.getElementById("breakfastM").value,
        snack1: document.getElementById("snack1M").value,
        lunch: document.getElementById("lunchM").value,
        snack2: document.getElementById("snack2M").value,
        dinner: document.getElementById("dinnerM").value
    };
    var mealsTu = {
        breakfast: document.getElementById("breakfastTu").value,
        snack1: document.getElementById("snack1Tu").value,
        lunch: document.getElementById("lunchTu").value,
        snack2: document.getElementById("snack2Tu").value,
        dinner: document.getElementById("dinnerTu").value
    }
    var mealsW = {
        breakfast: document.getElementById("breakfastW").value,
        snack1: document.getElementById("snack1W").value,
        lunch: document.getElementById("lunchW").value,
        snack2: document.getElementById("snack2W").value,
        dinner: document.getElementById("dinnerW").value
    }
    var mealsTh = {
        breakfast: document.getElementById("breakfastTh").value,
        snack1: document.getElementById("snack1Th").value,
        lunch: document.getElementById("lunchTh").value,
        snack2: document.getElementById("snack2Th").value,
        dinner: document.getElementById("dinnerTh").value
    }
    var mealsF = {
        breakfast: document.getElementById("breakfastF").value,
        snack1: document.getElementById("snack1F").value,
        lunch: document.getElementById("lunchF").value,
        snack2: document.getElementById("snack2F").value,
        dinner: document.getElementById("dinnerF").value
    }
    var mealsSa = {
        breakfast: document.getElementById("breakfastSa").value,
        snack1: document.getElementById("snack1Sa").value,
        lunch: document.getElementById("lunchSa").value,
        snack2: document.getElementById("snack2Sa").value,
        dinner: document.getElementById("dinnerSa").value
    }
    var mealsSu = {
        breakfast: document.getElementById("breakfastSu").value,
        snack1: document.getElementById("snack1Su").value,
        lunch: document.getElementById("lunchSu").value,
        snack2: document.getElementById("snack2Su").value,
        dinner: document.getElementById("dinnerSu").value
    }

    // Create on-the-fly window
    var mealPlanWindow = window.open();
    mealPlanWindow.document.write("<html><head><title>Meal Plan for " + name + "</title></head><body>");
    mealPlanWindow.document.write("<h1>Meal Plan for " + name + "</h1>");
    mealPlanWindow.document.write("<p><strong>Goal for the week:</strong> " + goal + "</p>");
    mealPlanWindow.document.write("<h2>Meal Plan</h2>");
    mealPlanWindow.document.write("<h3>Monday</h3")
    mealPlanWindow.document.write("<ul>");
    for (var meal in mealsM) {
        mealPlanWindow.document.write("<li><strong>" + meal + ":</strong> " + mealsM[meal] + "</li>");
    }
    mealPlanWindow.document.write("</ul>");
    mealPlanWindow.document.write("<h3>Tuesday</h3")
    mealPlanWindow.document.write("<ul>");
    for (var meal in mealsTu) {
        mealPlanWindow.document.write("<li><strong>" + meal + ":</strong> " + mealsTu[meal] + "</li>");
    }
    mealPlanWindow.document.write("</ul>");
    mealPlanWindow.document.write("<h3>Wednesday</h3")
    mealPlanWindow.document.write("<ul>");
    for (var meal in mealsW) {
        mealPlanWindow.document.write("<li><strong>" + meal + ":</strong> " + mealsW[meal] + "</li>");
    }
    mealPlanWindow.document.write("</ul>");
    mealPlanWindow.document.write("<h3>Thursday</h3")
    mealPlanWindow.document.write("<ul>");
    for (var meal in mealsTh) {
        mealPlanWindow.document.write("<li><strong>" + meal + ":</strong> " + mealsTh[meal] + "</li>");
    }
    mealPlanWindow.document.write("</ul>");
    mealPlanWindow.document.write("<h3>Friday</h3")
    mealPlanWindow.document.write("<ul>");
    for (var meal in mealsTh) {
        mealPlanWindow.document.write("<li><strong>" + meal + ":</strong> " + mealsTh[meal] + "</li>");
    }
    mealPlanWindow.document.write("</ul>");
    mealPlanWindow.document.write("<h3>Saturday</h3")
    mealPlanWindow.document.write("<ul>");
    for (var meal in mealsSa) {
        mealPlanWindow.document.write("<li><strong>" + meal + ":</strong> " + mealsSa[meal] + "</li>");
    }
    mealPlanWindow.document.write("</ul>");
    mealPlanWindow.document.write("<h3>Sunday</h3")
    mealPlanWindow.document.write("<ul>");
    for (var meal in mealsSu) {
        mealPlanWindow.document.write("<li><strong>" + meal + ":</strong> " + mealsSu[meal] + "</li>");
    }
    mealPlanWindow.document.write("</ul>");
    mealPlanWindow.document.write("<button onclick='window.print()'>Print</button>");
    mealPlanWindow.document.write("<button>Download</button></a>");

    mealPlanWindow.document.write("</body></html>");
}
// Clear form
function clearMealPlan() {
    var form = document.getElementById("mealForm");
    form.reset();
}
// Validade Email
function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}