function HorizentalBlogsScroller() {
  return (
    <div className="container">
      <center>
        <div class="container">
          {/* <h1 style="text-align:center;color:green;">GeeksforGeeks</h1> */}
          <h3>To make horizontal scrollable in a bootstrap row?</h3>
          <div class="container horizontal-scrollable">
            <div class="row text-center">
              <div class="col-xs-4">1</div>
              <div class="col-xs-4">2</div>
              <div class="col-xs-4">3</div>
              <div class="col-xs-4">4</div>
              <div class="col-xs-4">5</div>
              <div class="col-xs-4">6</div>
              <div class="col-xs-4">7</div>
            </div>
          </div>
        </div>
      </center>
      <style jsx>{`
        .horizontal-scrollable > .row {
          overflow-x: auto;
          white-space: nowrap;
        }

        .horizontal-scrollable > .row > .col-xs-4 {
          display: inline-block;
          float: none;
        }
        /* Decorations */

        .col-xs-4 {
          color: white;
          font-size: 24px;
          padding-bottom: 20px;
          padding-top: 18px;
        }

        .col-xs-4:nth-child(2n + 1) {
          background: green;
        }

        .col-xs-4:nth-child(2n + 2) {
          background: black;
        }
      `}</style>
    </div>
  );
}

export default HorizentalBlogsScroller;
