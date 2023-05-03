export function main() {
    $.ig.RevealSdkSettings.setBaseUrl("https://samples.revealbi.io/upmedia-backend/reveal-api/");

    $.ig.RVDashboard.loadDashboard("Sales", (dashboard) => {
        var revealView = new $.ig.RevealView("#revealView");
        revealView.dashboard = dashboard;
    });
}
