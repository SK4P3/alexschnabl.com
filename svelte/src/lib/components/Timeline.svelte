<script lang="ts">
    interface TimelineEntry {
        dates: string;
        text: string;
    }

    let timeline: TimelineEntry[] = [
        {dates: "2018 - 2019", text: "Exchange Year in <br/> San Diego, California"},
        {dates: "2019 - 2021", text: "Started college at 16 <br/> Graduated high school"},
        {dates: "2019 - 2023", text: "Bachelor in CS / Economics <br/> at AAU / ETHZ"},
    ]

    function getHeight(i: number) {
        return 70 / (timeline.length - 1) * i;
    }
</script>

<div class="relative h-[88vh] lg:h-[93vh]">
    <div class="timelinebar"></div>

    {#each timeline as entry, i}
        <div class="timelinedate" style="top: {getHeight(i)}%">{entry.dates}</div>
        <div class="timelinedot" style="top: {getHeight(i)}%"></div>
        <div class="timelinetext" style="top: {getHeight(i)}%">
            <h3>{@html entry.text}</h3>
        </div>
    {/each}

    <div class="timelinedate top-[100%]">2022 - now</div>
    <div class="timelinedot top-[100%]"></div>
</div>